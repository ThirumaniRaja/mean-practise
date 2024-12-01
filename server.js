// const server = http.createServer((req, res) => {
//   res.end("This my first response");
// });

// const port = process.env.PORT || 3300;
// app.set('port', port)
// const server = http.createServer(app);
// server.listen(port)
const app = require('./backend/express_api/app')
const db = require('./backend/express_api/db_connector');


const debug = require("debug")("node-angular");
const http = require("http");

const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  debug("Listening on " + bind);
};

const port = normalizePort(process.env.PORT || "3300");
app.set("port", port);

const server = http.createServer(app);
app.get('/product/:product_id', async (req, res) => {
    const { product_id } = req.params;

    try {
        // Query to fetch product details
        const [rows] = await db.execute(
            'SELECT product_id, product_name, product_category, product_price FROM product WHERE product_id = ?',
            [product_id]
        );

        // If no product is found, send a 404 response
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Send the product details as the response
        res.status(200).json(rows[0]);
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// to show all list
app.get('/product', async (req, res) => {
    try {
        // Query to fetch all product details
        const [rows] = await db.execute(
            'SELECT product_id, product_name, product_category, product_price FROM product'
        );

        // If no products are found, send a 404 response
        if (rows.length === 0) {
            return res.status(404).json({ message: 'No products found' });
        }

        // Send the product list as the response
        res.status(200).json(rows);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


server.on("error", onError);
server.on("listening", onListening);
server.listen(port);
