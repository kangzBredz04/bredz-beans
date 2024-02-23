import express from "express";

const coffees = [
  {
    id: 1,
    name: "Arabica Coffee",
    origin: "Ethiopia",
    type: "Arabica",
    flavor_profile: "Sweet with fruity notes",
    price: 25000,
  },
  {
    id: 2,
    name: "Robusta Coffee",
    origin: "Indonesia",
    type: "Robusta",
    flavor_profile: "Bitter with earthy tones",
    price: 20000,
  },
  {
    id: 3,
    name: "Kopi Luwak",
    origin: "Indonesia",
    type: "Specialty",
    flavor_profile: "Unique with distinctive aroma",
    price: 100000,
  },
  {
    id: 4,
    name: "Blue Mountain Coffee",
    origin: "Jamaica",
    type: "Arabica",
    flavor_profile: "Light with floral hints",
    price: 50000,
  },
];

let id = coffees.length;

// membuat route dari coffes
const router = express.Router();

// get data coffee
router.get("/", (_req, res) => {
  res.json(coffees);
});

// get data coffee berdasarkan id
router.get("/:id", (req, res) => {
  const coffee = coffees.find((c) => c.id == req.params.id);
  if (coffee) {
    res.status(200).json(coffee);
  } else {
    res.status(404).json({ message: "Data Coffee Not Found!" });
  }
});

// buat data coffee
router.post("/new-coffee", (req, res) => {
  try {
    //   menambahkan data baru kedalam array objek
    coffees.push({
      id: ++id,
      ...req.body,
    });
    // mengirimkan pemberitahuan berhasil ditambahkan
    res.status(200).json({
      id: id,
      ...req.body,
    });
  } catch (error) {
    // mengirimkan pemberitahuan error
    res.status(500).send(error);
  }
});

// update data coffee berdasarkan id
router.put("/:id", (req, res) => {
  const updateData = req.body;
  const indexData = coffees.findIndex((c) => c.id === req.params.id);
});

// get data coffee berdasarkan type
router.get("/:type", (req, res) => {
  // get data type dari parameter
  const type = req.params.type;
  // filter data berdasarkan type
  const coffeeByCategory = coffees.filter(
    (coffee) => coffee.type.toLowerCase() === type.toLowerCase()
  );
  if (coffeeByCategory.length > 0) {
    res.status(200).json(coffeeByCategory);
  } else {
    res.status(404).json({
      message: "Data Coffee Not Found!",
    });
  }
});

export default router;
