const router = require('express').Router();
const { Brand, Style } = require('../models');

// need to update variables to match once we have all our informaton for handlebars and such
router.get('/', async (req, res) => {
  try {
    const dbBrandData = await Brand.findAll({
      include: [
        {
          model: Style,
          attributes: ['filename', 'description'],
        },
      ],
    });

    const brands = dbBrandData.map((Brand) =>
      Brand.get({ plain: true })
    );
    res.render('homepage', {
      brands,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// // need to update variables to match once we have all our informaton for handlebars and such
router.get('/brand/:id', async (req, res) => {
  try {
    const dbBrandData = await Brand.findByPk(req.params.id, {
      include: [
        {
          model: Style,
          attributes: [
            'id',
            'product_name',
            'price',
            'filename',
            'description',
            'product_description'
          ],
        },
      ],
    });

    const brand = dbBrandData.get({ plain: true });
    res.render('shoeBrand', { brand, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one shoe by id and possibly reviews. 
router.get('/style/:id', async (req, res) => {
  try {
    const dbstyleData = await Style.findByPk(req.params.id);

    const styles = dbstyleData.get({ plain: true });
    res.render('shoeStyle', { styles, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('signup');
});

router.get('/culture', (req, res) => {
  res.render('culture');
});
module.exports = router;