const express = require("express");
const router = express.Router();

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get("/test", (req, res) =>
  res.json({
    accounts: {
      name: "Accounts",
      id: "1",
      articles: [
        {
          id: "1",
          title: "Create Your Mobile Login",
          body: "Example Body Stuff"
        },
        {
          id: "2",
          title: "Reset a Password",
          body: "Example Body Stuff"
        },
        {
          id: "3",
          title: "Save Login",
          body: "Example Body Stuff"
        }
      ]
    },

    locks: {
      id: "2",
      name: "Locks",
      articles: [
        {
          id: "1",
          title: "Unlock a Door",
          body: "Example Body Stuff"
        },
        {
          id: "2",
          title: "Select a Different Door",
          body: "Example Body Stuff"
        },
        {
          id: "3",
          title: "Re-scan for Doors",
          body: "Example Body Stuff"
        }
      ]
    },

    thermostats: {
      id: "3",
      name: "Thermostats",
      articles: [
        {
          id: "1",
          title: "Set the Temporature",
          body: "Example Body Stuff"
        },
        {
          id: "2",
          title: "Change the Mode",
          body: "Example Body Stuff"
        },
        {
          id: "3",
          title: "Set the Schedule",
          body: "Example Body Stuff"
        }
      ]
    },

    lights: {
      id: "4",
      name: "Lights",
      articles: [
        {
          id: "1",
          title: "Turn a Light On or Off",
          body: "Example Body Stuff"
        },
        {
          id: "2",
          title: "Turn all Lights On or Off",
          body: "Example Body Stuff"
        },
        {
          id: "3",
          title: "Change the Order of a Light",
          body: "Example Body Stuff"
        }
      ]
    }
  })
);

module.exports = router;
