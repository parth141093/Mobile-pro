// Sample data: ingredients
export const details = [
  // Desserts
  {
    id: 1,
    total_time: 10,
    serves: 2,
    is_vegetarian: true,
    is_vegan: true,
    ingredients : [
      "1½ tbsp salted caramel sauce",
      "1½ tbsp crunchy peanut butter",
      "150ml/5fl oz double cream",
      "2 tsp icing sugar",
      "25g/1oz milk cooking chocolate, broken into pieces",
      "2 bananas, peeled and split lengthways",
      "6 scoops vanilla ice cream",
      "6 strawberries, hulled and halved",
      "2 tsp bright-coloured sprinkles, such as hundreds and thousands",
      "6 fresh cherries, stones removed if preferred",
      "2 tbsp harissa paste", 
      "2 lemons"
    ],
    directions : [
      "To make the sauce, melt the caramel sauce and peanut butter in a small saucepan over a low heat until it becomes runny. Keep warm.",
      "To make the cream, lightly whip the cream and icing sugar in a bowl until just stiff. Set aside in the fridge.",
      "To make the drizzle, melt the chocolate in a small glass heatproof bowl set over a saucepan of gently simmering water (known as a bain-marie or double-boiler). Allow the chocolate to melt gently in the bowl, stirring it often and making sure that the bowl isn't touching the water below.",
      "To assemble the banana split, lay the banana halves in pairs in two long shallow dishes or on two plates. Nestle three scoops of ice cream down each split banana. Spoon or pipe three mounds of whipped cream in between the ice cream scoops.",
      "Scatter over the strawberries. Drizzle over the melted chocolate and salted caramel peanut sauce. Scatter over the sprinkles, top with the cherries, and serve immediately."
    ],
    recipe_id: 1
  },
  {
    id: 2,
    total_time: 60,
    serves: 18,
    is_vegetarian: true,
    is_vegan: false,
    ingredients : [
        "140g/5oz butter, softened",
        "250g/9oz caster sugar",
        "2 free-range eggs, lightly beaten",
        "1 tsp vanilla extract",
        "150g/5½oz plain flour",
        "75g/2½oz self-raising flour",
        "1 tsp bicarbonate of soda",
        "50g/2oz cocoa powder",
        "200ml/7fl oz buttermilk or plain yoghurt",
        "250g/9oz sugar",
        "120g/4½oz golden syrup",
        "4 free-range eggs, whites only",
        "2 tbsp chocolate sugar strands"
      ],
      directions : [
        "Preheat the oven to 180C/350F/Gas 4. Line twelve muffin tins with muffin cases.",
        "For the cakes, beat together the butter and sugar with a hand-held mixer until very light and fluffy. Add the eggs a little at a time, beating well after each addition. Add the vanilla extract with the last of the egg.",
        "Sift together the flours, bicarbonate of soda, and cocoa into a large mixing bowl.",
        "Gently fold the flour mix into the butter mixture along with the buttermilk until completely combined and smooth.",
        "Place a dessertspoonful of the batter into each muffin case, then bake in the oven for 20 minutes until firm to the touch.",
        "Place on a wire rack to cool.",
        "For the icing, place the sugar, golden syrup, and four tablespoons of water into a large saucepan. Heat gently, stirring until the sugar has dissolved.",
        "Bring the sugar syrup to the boil and cook for about 5-6 minutes until the syrup reaches 115C/239F when measured with a sugar thermometer. Remove the pan from the heat.",
        "While the syrup is boiling, in a large bowl whisk the egg whites with a hand-held mixer until soft peaks form when the whisk is removed. Then, with the mixer on low speed, pour in the sugar syrup in a thin steady stream. Be careful not to pour the syrup onto the beaters as it may splash onto your hands.",
        "Once all the syrup has been added, increase the speed of the mixer and mix for about 10 minutes until the icing is completely cool, thick, and glossy. Do not skimp on the whipping or your icing will be too soft and your ghosts will sag.",
        "Place the icing into a piping bag fitted with a large plain nozzle. Pipe a circle of icing onto each cupcake. Then, holding the bag upright over the centre of the cake, pipe a tall mound of icing, and quickly pull the tip away to form a small peak on top."
      ],
    recipe_id: 2
  },
    {
    id: 3,
    total_time: 30,
    serves: 6, 
    is_vegetarian: true,
    is_vegan: false,
    ingredients: [
      "125g/4½oz wholemeal self-raising flour",
      "½ tsp baking powder",
      "1 large egg",
      "150ml/¼ pint semi-skimmed milk",
      "1 ripe banana (approx. 150g/5½oz), roughly mashed",
      "1 tsp sunflower or vegetable oil, for frying"
    ],
    directions: [
      "Put the flour and baking powder in a bowl and mix lightly. Make a well in the centre and break the egg into it. Add half the milk and beat, using a wooden spoon, to form a thick batter.",
      "Reserve 1 tablespoon of the remaining milk and add the rest to the batter, along with the mashed banana. Mix until combined.",
      "Place a large non-stick frying pan over medium heat. Brush a little of the oil over the pan with a heatproof brush. Once the pan is hot, pour a small ladleful (around 2 dessertspoons) of the batter onto one side of the pan; it should spread to approximately 9cm/3½in in diameter. Make three more pancakes in the same way.",
      "Cook the pancakes for 1½ minutes, or until bubbles appear on the surface and the edges look dry and slightly shiny. Quickly and carefully flip over and cook on the other side for 1½ minutes, or until light, fluffy and pale golden brown. If you turn the pancakes too late, they will be too set to rise evenly. You can always flip again if you want the first side to be a little browner.",
      "Transfer to a warm plate (in a single layer so they don’t get squashed) and cook another eight pancakes in the same way, brushing the pan with a little more oil between each batch. (If the batter begins to thicken too much, add the reserved milk.)",
      "Serve in stacks with sliced bananas, pecan nuts, and a little ground cinnamon, with a spoonful of yoghurt and a drizzle of honey or maple syrup if you like."
    ],
    recipe_id: 3
  },
//Lunch
  {
    id: 4,
    total_time: 20,
    serves: 2,
    is_vegetarian: true,
    is_vegan: false,
    ingredients: [
      "125g ricotta",
      "½ lemon, zested and cut into wedges",
      "¼ tsp nutmeg, grated",
      "4 thick slices of Tesco Finest seeded sourdough, or similar",
      "½ tbsp olive oil",
      "250g or 3 roasted pumpkin or butternut squash wedges, cut into cubes",
      "handful chopped parsley",
      "sage leaves, to serve (optional)"
    ],
    hot_honey_ingredients: [
      "4 tbsp honey",
      "1 tbsp chilli flakes",
      "1 tbsp white wine vinegar"
    ],
    directions: [
      "To make the hot honey, put the honey, chilli flakes, and vinegar into a small pan, stir well, and heat gently for 5 minutes. Remove from the heat.",
      "Combine the ricotta, lemon zest, nutmeg, and some seasoning in a small bowl.",
      "Warm a griddle or frying pan on a high heat. Brush the bread slices all over with the oil and toast for 3-4 minutes on each side until golden and charred.",
      "Spread the ricotta mixture over the toast, top with the roasted pumpkin or butternut squash, and generously drizzle over the hot honey. Finish with a sprinkle of fresh parsley and sage leaves, if you like, plus a squeeze of lemon juice."
    ],
    recipe_id: 4
  },
  {
    id: 5,
    total_time: 25,
    serves: 4,
    is_vegetarian: false,  // contains bacon
    is_vegan: false,  // contains eggs, bacon, Worcestershire sauce
    ingredients: [
      "2 cups fresh baby spinach, torn",
      "2 hard-boiled large eggs, sliced",
      "4 cherry tomatoes, halved",
      "3 medium fresh mushrooms, sliced",
      "1/4 cup salad croutons",
      "6 pitted ripe olives, halved",
      "3 slices red onion, halved",
      "4 bacon strips, diced",
      "1 tablespoon chopped onion",
      "2 tablespoons sugar",
      "2 tablespoons ketchup",
      "1 tablespoon red wine vinegar",
      "1 tablespoon Worcestershire sauce"
    ],
    directions: [
      "Divide spinach between 2 plates. Arrange the eggs, tomatoes, mushrooms, croutons, olives, and red onion over the top.",
      "In a small skillet, cook bacon over medium heat until crisp. Using a slotted spoon, remove to paper towels; drain, reserving 2 tablespoons drippings. Saute onion in drippings until tender.",
      "Stir in the sugar, ketchup, vinegar, and Worcestershire sauce. Bring to a boil. Reduce heat; simmer, uncovered, until thickened, 1-2 minutes. Sprinkle bacon over salads; drizzle with dressing."
    ],
    recipe_id: 5
  },
  {
    id: 6,
    total_time: 20,
    serves: 4,
    is_vegetarian: false,  // contains bacon and eggs
    is_vegan: false,  // contains eggs, cheese, and bacon
    ingredients: [
      "4 tsp oil",
      "250g leftover bread (ciabatta or baguette), cut into 3cm cubes",
      "250g smoked bacon, cut into small pieces",
      "300g chestnut mushrooms, cut into quarters",
      "1 tsp garlic powder",
      "1 tsp onion powder",
      "250g cherry tomatoes, halved",
      "4 eggs",
      "75g mature Cheddar, grated"
    ],
    directions: [
      "Heat 3 tsp oil over a medium-high heat in a large, deep frying pan. Add the bread cubes and cook until starting to crisp or crisped all over (depending on how you like it).",
      "Remove the bread cubes to a plate, put the pan back on the heat, and add the remaining 1 tsp oil.",
      "Add the bacon, mushrooms, garlic powder, and onion powder; season. Fry for 5-10 mins until everything is cooked through and the water from the mushrooms has cooked off.",
      "Put the bread cubes back in the pan along with the tomatoes and stir to mix through. Preheat the grill to high.",
      "Make 4 spaces in the hash and break an egg into each one, sprinkle the cheese over and around, and cook for 5 mins until the bottoms of the eggs are starting to cook. Pop under a hot grill to finish off and melt the cheese."
    ],
    recipe_id: 6
  },
  {
    id: 7,
    total_time: 60,  // 1 hour
    serves: 4,       // Assuming this serves 4 based on ingredient quantities
    is_vegetarian: true,  // Contains no meat or fish
    is_vegan: true,      // Contains no animal-derived ingredients
    ingredients: [
      "250g dried red lentils",
      "2 tbsp vegetable oil",
      "2 courgettes, halved lengthways and thinly sliced",
      "2 red onions, thinly sliced",
      "1 tbsp plain flour",
      "3 garlic cloves, crushed",
      "1½ tbsp tomato purée",
      "440g jar curry sauce",
      "1 vegetable stock pot",
      "300g long-grain rice, rinsed well",
      "1 lime, zested and cut into wedges",
      "15g fresh coriander, roughly chopped"
    ],
    directions: [
      "Put the lentils in a large bowl, cover with cold water, and leave to soak until needed. While the lentils are soaking, heat 1 tbsp oil in a large, lidded saucepan over medium-high heat. Add the courgettes, half the onions, and some seasoning, then fry for 8-10 mins until softened.",
      "Meanwhile, toss the remaining onions in the flour. Heat the remaining oil in a frying pan over medium-high heat and fry the onions for 10-12 mins, stirring regularly, until deep golden brown and crispy. Reduce the heat if they start to darken too quickly. Transfer to a plate lined with kitchen paper and leave to cool; they will crisp up more once cooled.",
      "While the onions cool, add the garlic and tomato purée to the courgette pan and cook for 2 mins. Add the curry sauce, then refill the jar with water and add to the pan with the stock pot. Drain and rinse the lentils, then add to the pan. Bring to a simmer, then bubble on low-medium heat for 25-30 mins, stirring occasionally, until the lentils are cooked. Add a splash of water if it’s too thick.",
      "Meanwhile, put the rice in a large, lidded saucepan with 700ml water. Bring to the boil, then reduce the heat to low, cover, and simmer for 12-15 mins until the water has been absorbed. Set aside for 5-10 mins, still covered, until needed.",
      "Stir the lime zest and most of the coriander into the dhal. Divide the rice between bowls and top with the dhal, crispy onions, lime wedges, and remaining coriander to serve."
    ],
    recipe_id: 7
  },
  {
    id: 8,
    total_time: 30,  // 30 minutes
    serves: 4,
    is_vegetarian: true,  // Contains no meat or fish
    is_vegan: true,       // Contains no animal-derived ingredients
    ingredients: [
      "1 tbsp coconut or olive oil",
      "1 large onion, chopped",
      "2 garlic cloves, crushed",
      "30g/1oz fresh root ginger, peeled and grated",
      "1 red Scotch bonnet chilli (or a milder red chilli if preferred), seeds removed and finely chopped",
      "2 tsp garam masala or curry powder",
      "25g/1oz tomato purée",
      "1 x 400g tin reduced-fat coconut milk",
      "150g/5½oz red split lentils",
      "2 sweet potatoes, scrubbed and cut into 2cm/¾in cubes",
      "1 red pepper, seeds removed and cut into 2cm/¾in chunks",
      "200g/7oz baby leaf spinach",
      "pinch salt"
    ],
    directions: [
      "Heat the oil in a large saucepan, add the onion, and fry gently for 5–6 minutes until soft. Add the garlic, ginger, chilli, and garam masala, and fry for 1 minute. Then stir in the tomato purée and fry for another minute.",
      "Pour in the coconut milk and 1 litre/1¾ pints of water. Stir in the lentils, sweet potato, and pepper. Bring to the boil, then reduce the heat to a gentle simmer.",
      "Cover the pan with a lid and cook for 20 minutes until the lentils and sweet potato are soft but still holding their shape.",
      "Stir in the spinach, a handful at a time, until wilted. Remove the pan from the heat and season with salt. Serve in warmed bowls."
    ],
    recipe_id: 8
  },
  {
    id: 9,
    total_time: 30,  // 30 minutes
    serves: 4,
    is_vegetarian: true,  // Contains no meat or fish
    is_vegan: false,      // Contains dairy (yoghurt)
    ingredients: [
        "½ onion, finely chopped",
        "2 garlic cloves, finely chopped",
        "1 tsp ground cumin",
        "1 tsp sweet smoked paprika",
        "1 red chilli, finely chopped",
        "2 tbsp finely chopped coriander (leaves and stalks)",
        "1 tbsp gram flour",
        "400g can chickpeas, drained",
        "1 tbsp olive oil",
        "salt and freshly ground black pepper",
        "8 tbsp plain yoghurt",
        "1 lemon, juice only",
        "1 tbsp harissa paste",
        "4 large tortilla wraps or flatbreads",
        "½ cucumber, thinly shredded with a julienne peeler",
        "1 carrot, thinly shredded with a julienne peeler",
        "2 large gherkins, thinly sliced",
        "1 Baby Gem lettuce, shredded"
      ],
    directions: [
      "Preheat the oven to 200C/180C Fan/Gas 6. Line a baking tray with baking paper.",
      "To make the falafel, put all the falafel ingredients in a food processor. Season and blend until fairly smooth. Divide the mixture into 12 balls or patties (using wet hands so that they don’t stick). Spread the falafels over the prepared tray and bake for 12–15 minutes, or until golden-brown and crisp.",
      "To assemble the wraps, mix together the yoghurt, lemon juice, and harissa in a small bowl.",
      "Warm the wraps in a large pan over medium heat for 1–2 minutes, then spread a large spoonful of the yoghurt mixture onto the wraps. Divide the cucumber, carrot, gherkins, and lettuce between the wraps and top each with three falafels. Wrap up and serve."
    ],
    recipe_id: 9
  },
  {
    id: 10,
    total_time: 10,  // Total time is 10 minutes (not including marination)
    serves: 4,
    is_vegetarian: true,  // Contains no meat or fish
    is_vegan: false,      // Contains dairy (halloumi and yogurt)
    ingredients: [
      "2 tbsp harissa paste",
      "2 lemons",
      "250g/9oz halloumi, thinly sliced",
      "1 small red onion, finely chopped",
      "2 vine tomatoes, finely chopped",
      "½ cucumber, seeds removed, finely chopped",
      "1 small fennel bulb, thinly sliced",
      "2 tbsp olive oil",
      "1 tbsp cider vinegar",
      "250g/9oz low-fat Greek-style yoghurt",
      "3 tbsp finely chopped mint leaves",
      "small handful rocket leaves",
      "salt and freshly ground black pepper"
    ],
    directions: [
      "Put 1 tablespoon of the harissa paste in a bowl and juice one of the lemons into it. Stir to mix well. Put the halloumi on a foil-lined baking tray and brush it all over with the harissa mixture. Cover and marinate for 10–15 minutes.",
      "Place the onion, tomatoes, cucumber, and fennel in a mixing bowl. Add the olive oil and vinegar, season, and toss well. Cover and leave to sit for 10–15 minutes.",
      "Mix the yoghurt with the remaining harissa and the mint and squeeze over the juice of the remaining lemon. Season with salt and pepper and stir to mix well.",
      "Preheat the grill to medium-hot. Grill the halloumi for 3–4 minutes on each side, or until golden-brown.",
      "To serve the salad, spread the yoghurt mixture over a serving platter, top with the grilled halloumi, and scatter over the salad and rocket. Serve immediately."
    ],
    recipe_id: 10
  },
  {
    id: 11,
    total_time: 30,  // Total time is 30 minutes
    serves: 4,
    is_vegetarian: false,  // Contains turkey
    is_vegan: false,       // Contains turkey and other animal products
    ingredients: [
      "sunflower or rapeseed oil, for frying",
      "4 shallots, thinly sliced",
      "2cm/¾in fresh root ginger, grated",
      "3 garlic cloves, thinly sliced",
      "2 tsp brown sugar",
      "2 tsp gochujang (Korean fermented pepper paste)",
      "1 yellow pepper, seeds removed, sliced thinly",
      "2 tsp soy sauce",
      "300g/10½oz leftover turkey, diced",
      "1 red pepper, seeds removed, sliced thinly",
      "3 spring onions, sliced",
      "2 tbsp freshly chopped parsley",
      "200g/7oz cooked long grain rice",
      "1 lime, juice and zest (juice to taste)",
      "50g/1¾oz baby spinach",
      "½ cucumber, peeled into ribbons",
      "2 carrots, peeled and grated",
      "2 tbsp toasted sesame seeds, to garnish"
    ],
    directions: [
      "Heat a frying pan with a little oil, add the shallots and fry for about 2 minutes before adding the ginger, garlic, brown sugar, and gochujang. Stir well for a minute. Add the yellow pepper, half the soy sauce, and 70ml/2½fl oz of water and cook for 2 minutes before adding the turkey.",
      "Cover and simmer on low for about 4 minutes, or until the peppers are cooked and the turkey is fully heated through.",
      "In a separate pan, heat a little oil, add the red pepper slices, and fry for about 3–4 minutes, remove from the pan and set aside. Add the spring onions to the pan and fry for 2 minutes before adding the parsley, cooked rice, a teaspoon of soy sauce, and the lime zest and juice (to taste). Continue to cook for a further 2–3 minutes, or until the rice is fully heated through.",
      "To serve, add some spinach to the bowl, followed by the rice, red pepper, cucumber ribbons, grated carrots, and turkey in sections, then top with toasted sesame seeds."
    ],
    recipe_id: 11
  },
  {
    id: 12,
    total_time: 20,  // Total time is 20 minutes
    serves: 2,
    is_vegetarian: true,  // Recipe is vegetarian
    is_vegan: false,      // Recipe contains eggs and dairy
    ingredients: [
      "150g pack organic blueberries",
      "3 tbsp organic set honey",
      "1 organic lemon, zested and juiced",
      "1 tsp cornflour",
      "120ml organic whole milk",
      "2 organic eggs",
      "½ tsp vanilla extract",
      "4 thick slices organic bloomer",
      "10g organic butter",
      "1 tbsp icing sugar (optional)"
    ],
    directions: [
      "To make the blueberry compote, put the blueberries, 2 tbsp honey, the lemon juice, cornflour and 1 tbsp water in a small saucepan over a low heat. Stir slowly for 5 mins until the blueberries have popped and released their juices and the mixture has thickened to a jammy consistency. Cover and keep warm.",
      "In a jug, whisk together the milk, eggs, vanilla extract, most of the lemon zest and 1 tbsp honey until well combined.",
      "Place the bread slices in a shallow dish and pour over the egg mixture. Allow the bread to sit in the mixture for 2 mins before carefully turning over with a fork and resting for another 2 mins on the other side.",
      "Heat the oil and butter in a large nonstick frying pan over a medium heat until foaming. Carefully add the soaked bread slices to the pan and fry for 3-4 minutes on each side until golden and crisp.",
      "Transfer to warmed serving plates and spoon over some of the blueberry compote. Dust with a little icing sugar, if using, and top with a little lemon zest. Serve immediately."
    ],
    recipe_id: 12
  },
  {
    id: 13,
    total_time: 45,  // Total time is 45 minutes
    serves: 4,
    is_vegetarian: true,  // Recipe is vegetarian
    is_vegan: false,      // Recipe contains dairy (paneer and yogurt)
    ingredients: [
      "1 red onion, finely sliced",
      "1 lemon, juiced",
      "pinch of sugar",
      "400g paneer, cut into 2cm cubes",
      "2 peppers, deseeded and sliced",
      "300g cherry tomatoes",
      "3 garlic cloves, crushed",
      "2cm piece ginger, finely grated",
      "1 tsp ground cumin",
      "2 tsp mild curry powder",
      "1 tbsp vegetable oil",
      "75g mango chutney",
      "150g Greek yogurt",
      "¼ cucumber, grated and squeezed",
      "15g fresh mint, leaves chopped, plus a few extra sprigs to serve",
      "10g fresh coriander, leaves and stalks finely chopped",
      "pinch of garam masala",
      "4 Greek-style flatbreads"
    ],
    directions: [
      "Preheat the oven to gas 6, 200°C, fan 180°C. Put the onion in a bowl with the lemon juice and the sugar. Add a pinch of salt, then stir to coat the onion.",
      "Put the paneer, peppers, tomatoes, 2 of the garlic cloves, the ginger, cumin, curry powder, vegetable oil and mango chutney in a mixing bowl. Add seasoning to taste and stir to coat. Transfer to a large roasting tin and spread out into an even layer. Bake in the oven for 30 mins, turning the paneer and veg halfway, until the paneer is golden and the vegetables are tender.",
      "Stir the Greek yogurt, remaining garlic, cucumber and herbs together in a bowl and add 2 tsp of the lemon juice from the red onions. Season to taste and sprinkle over the garam masala.",
      "Place the flatbreads on a baking tray and warm for 5 mins in the residual heat of the oven. Divide the traybake between plates and top with the pickled onions and a few extra mint leaves. Serve with the flatbreads and raita."
    ],
    recipe_id: 13
  },
  {
    id: 14,
    total_time: 15,  // Total time is approximately 15 minutes
    serves: 4,
    is_vegetarian: true,  // Recipe is vegetarian
    is_vegan: false,      // Contains cheese (optional)
    ingredients: [
      "6 cups fresh baby spinach, washed and dried",
      "1/2 red onion, thinly sliced",
      "1 cup cherry tomatoes, halved",
      "1/2 cucumber, sliced",
      "1/4 cup feta cheese, crumbled (optional)",
      "1/4 cup walnuts or pecans, toasted",
      "1/4 cup dried cranberries or raisins",
      "1/4 cup balsamic vinaigrette dressing",
      "Salt and pepper, to taste"
    ],
    directions: [
      "In a large salad bowl, combine the fresh spinach, sliced red onion, cherry tomatoes, and cucumber.",
      "If using, add the crumbled feta cheese, toasted walnuts or pecans, and dried cranberries or raisins.",
      "Drizzle the balsamic vinaigrette dressing over the salad and toss gently to combine.",
      "Season with salt and pepper to taste. Serve immediately."
    ],
    recipe_id: 14
  },
  {
    id: 15,
    total_time: 40,  // Total time is approximately 40 minutes
    serves: 4,
    is_vegetarian: false,  // Recipe contains salmon
    is_vegan: false,      // Contains yogurt and fish
    ingredients: [
        "600g sweet potatoes",
        "1 tbsp olive oil",
        "2 salmon fillets, from sustainable sources",
        "1 lemon",
        "2 tbsp wholemeal flour, for dusting",
        "¼ white cabbage",
        "4 large carrots",
        "2 eating apples",
        "1 tbsp hot chilli sauce",
        "3 tbsp fat-free natural yogurt",
        "200g frozen peas",
        "1 ciabatta loaf"
    ],
    directions: [
        "Preheat the oven to gas 4, 180°C, fan 160°C. Cut the sweet potatoes into thin wedges. Place on a baking tray, drizzle with 1 tbsp olive oil, and season lightly. Bake for 30 mins or until golden and cooked through, turning halfway.",
        "Slice the salmon fillets in half lengthways, grate over the lemon zest, and squeeze over half the lemon juice. Dust with the flour, then season lightly.",
        "Grate the cabbage, carrots, and apples, squeeze over the remaining lemon juice, then mix with ½ tbsp chilli sauce and the yogurt.",
        "Cook the peas in boiling water for 3 mins, then drain, mash, and season. Warm the ciabatta loaf in the oven for 5 mins.",
        "Place the salmon in a large nonstick frying pan over medium heat. Cook for 6-8 mins or until just cooked through.",
        "Slice the ciabatta open and spread the mashed peas over one side. Pile on some slaw and top with the salmon. Add extra chilli sauce if desired, pop the lid on, and slice into 4. Serve with the remaining slaw and the sweet potato wedges."
    ],
    recipe_id: 15
},
{
  id: 16,
  total_time: 30,  // Total time is approximately 30 minutes
  serves: 2,
  is_vegetarian: true,  // Recipe is vegetarian
  is_vegan: false,      // Contains yogurt and eggs
  ingredients: [
      "300g 0% fat Greek yogurt",
      "1 garlic clove, crushed",
      "15g fresh dill, most roughly chopped, reserving a few sprigs to garnish",
      "½ lemon, zested and juiced",
      "40g walnuts (optional)",
      "1 tbsp white wine vinegar",
      "4 medium eggs (use really fresh, fridge-cold eggs)",
      "4 slices white sourdough",
      "4 tbsp olive oil",
      "½ tsp crushed chillies",
      "½ tsp smoked paprika",
      "pinch of cayenne pepper"
  ],
  directions: [
      "Put the ingredients for the chilli oil in a saucepan with a generous pinch of salt. Bring to a gentle simmer over medium heat, then reduce the heat to low and cook, stirring, for 2 mins. Set aside to infuse and cool.",
      "Meanwhile, put the yogurt, garlic, chopped dill, and lemon zest and juice in a bowl. Season and mix well; set aside. If using, lightly toast the walnuts in a frying pan over medium heat for 2-3 mins, then roughly chop and set aside.",
      "Bring a pan of salted water to the boil, then add the vinegar. Crack an egg into a small bowl, then lower the heat so the water is very gently simmering. Using a slotted spoon, stir the water so it’s gently whirling, then carefully add the egg. Allow to firm up for about 10 secs, then repeat with a second egg. Cook for 3-4 mins until cooked to your liking. Meanwhile, toast the sourdough and spread with herby yogurt.",
      "Using the slotted spoon, carefully put the poached eggs on a plate lined with kitchen paper to dry for a few secs, then start to top the toasts with the first two eggs, while you poach the remaining eggs. Top the remaining toasts with the remaining poached eggs, then drizzle over the chilli oil and top with the walnuts, if you like. Garnish with the dill sprigs."
  ],
  recipe_id: 16
},
// Vegan
{
  id: 17,
  total_time: 60,  // Total time is approximately 1 hour
  serves: 4,
  is_vegetarian: true,  // Recipe is vegetarian
  is_vegan: true,       // Recipe is vegan
  ingredients: [
      "2 cauliflowers (about 1.3kg), ⅓ cut into small florets, ⅔ finely chopped",
      "3 tbsp olive oil",
      "1 large red onion, cut into thin wedges",
      "30g pumpkin seeds",
      "1 vegetable stock pot, made up to 1ltr",
      "2 tbsp tahini",
      "300g rigatoni",
      "250g baby spinach",
      "1 tsp crushed chillies (optional)"
  ],
  directions: [
      "Preheat the oven to gas 7, 220°C, fan 200°C, and put a large baking tray inside to heat up. Toss the cauliflower florets with 1 tbsp oil and arrange in a single layer over half of the hot tray. Toss the onion with ½ tbsp oil and put on the other side of the tray.",
      "Bake for 20 mins, then add the pumpkin seeds around the onion and return to the oven for another 5 mins or until the cauliflower is tender and caramelised. Turn off the oven but leave the tray inside to keep warm.",
      "Meanwhile, heat the remaining 1½ tbsp oil in a large, lidded saucepan over medium heat. Cook the finely chopped cauliflower for 5 mins, stirring frequently – don’t let it go brown. Add the stock, cover, and bring to the boil. Reduce the heat to a simmer and cook for 12 mins. Put in a blender (or use a stick blender; it will just be less smooth) and blitz until creamy and glossy. Blend in the tahini and season well. Set aside half this sauce (800g) for the stew, right; return the rest to the pan.",
      "Cook the pasta to pack instructions, adding the spinach for the last 2 mins to wilt. Drain and stir into the cauliflower sauce in the pan.",
      "Divide the pasta between plates and top with the roasted cauliflower, onion, and toasted pumpkin seeds, and a pinch of crushed chillies, if you like."
  ],
  recipe_id: 17
},
{
  id: 18,
  total_time: 50,  // Total time is approximately 50 minutes
  serves: 4,
  is_vegetarian: true,  // Recipe is vegetarian
  is_vegan: true,       // Recipe is vegan
  ingredients: [
      "700g sweet potato, chopped into bite-sized chunks",
      "1 tsp smoked paprika",
      "1 red pepper, chopped into bite-sized chunks",
      "2 tbsp olive oil",
      "4 spring onions, sliced, white and green parts separated",
      "1 large avocado",
      "1 lime, juiced, plus extra wedges to serve",
      "150g cherry tomatoes, halved",
      "1 tbsp roughly chopped fresh coriander",
      "2 garlic cloves, crushed",
      "1 x 396g pack tofu",
      "1 tsp Cajun seasoning",
      "4 large soft flour tortillas",
      "50g baby spinach leaves",
      "100g dairy-free cheese, grated"
  ],
  directions: [
      "Preheat the oven to gas 7, 220°C, fan 200°C. Put the sweet potato in a large pan and cover with water. Add a pinch of salt, bring to the boil, then simmer for 2 mins. Drain the potatoes thoroughly and toss in a roasting tray with the paprika, red pepper and 1 tbsp oil to coat. Roast for 20 mins then mix the white parts of the spring onion into the tray and return to the oven for a further 15 mins.",
      "Meanwhile, roughly mash the avocado flesh with most of the lime juice in a bowl, keeping the texture quite chunky. Mix the tomatoes in another bowl with the coriander and remaining lime juice.",
      "To make the scrambled tofu, heat the remaining oil in a frying pan and add the garlic and the green parts of the spring onions. Cook for 2 mins until softened then add the tofu and Cajun seasoning. Mix well and break up the tofu as it cooks. Once heated through, season to taste and stir through a quarter of the roasted sweet potato and pepper.",
      "To serve, warm the wraps following the pack instructions. Spread some of the mashed avocado over each, top with a few spinach leaves, the tofu and sweet potato mix (you may not fit it all in). Finish with the tomatoes and a sprinkling of grated cheese.",
      "Fold up the top and bottom edges then roll to fully enclose the filling. Cut in half and serve with the lime wedges and any remaining sweet potato on the side."
  ],
  recipe_id: 18
},
{
  id: 19,
  total_time: 30,  // Total time is approximately 30 minutes
  serves: 4,
  is_vegetarian: true,  // Recipe is vegetarian
  is_vegan: true,       // Recipe is vegan
  ingredients: [
      "250g rice noodles",
      "2 tbsp vegetable oil",
      "3 garlic cloves, minced",
      "1 onion, thinly sliced",
      "1 red bell pepper, sliced",
      "1 carrot, julienned",
      "100g snap peas, trimmed",
      "2 cups broccoli florets",
      "3 tbsp soy sauce",
      "1 tbsp sesame oil",
      "1 tbsp fresh ginger, grated",
      "2 green onions, chopped",
      "Sesame seeds, for garnish"
  ],
  directions: [
      "Cook the rice noodles according to package instructions. Drain and set aside.",
      "In a large frying pan or wok, heat the vegetable oil over medium heat. Add the garlic and onion, and sauté for about 2 minutes until fragrant.",
      "Add the bell pepper, carrot, snap peas, and broccoli. Stir-fry for 5-7 minutes, or until the vegetables are tender-crisp.",
      "Stir in the cooked rice noodles, soy sauce, sesame oil, and grated ginger. Toss everything together and cook for another 2-3 minutes until heated through.",
      "Remove from heat and garnish with chopped green onions and sesame seeds before serving."
  ],
  recipe_id: 19
},
{
  id: 20,
  total_time: 60,  // Total time is approximately 60 minutes
  serves: 8,
  is_vegetarian: true,  // Recipe is vegetarian
  is_vegan: true,       // Recipe is vegan
  ingredients: [
      "250g self-raising flour",
      "200g caster sugar",
      "125ml almond milk (or any plant-based milk)",
      "125ml vegetable oil",
      "1 tsp vanilla extract",
      "1 tsp baking powder",
      "1/2 tsp baking soda",
      "Pinch of salt",
      "150g strawberry jam",
      "250ml vegan whipped cream",
      "Fresh strawberries, for decoration (optional)"
  ],
  directions: [
      "Preheat the oven to 180°C (350°F). Grease and line two 20cm (8 inch) round cake tins.",
      "In a large mixing bowl, combine the self-raising flour, caster sugar, baking powder, baking soda, and salt.",
      "In another bowl, mix together the almond milk, vegetable oil, and vanilla extract.",
      "Pour the wet ingredients into the dry ingredients and mix until just combined. Be careful not to over-mix.",
      "Divide the batter evenly between the prepared cake tins and smooth the tops.",
      "Bake in the preheated oven for 25-30 minutes, or until a skewer inserted into the center comes out clean.",
      "Once baked, remove from the oven and allow to cool in the tins for 10 minutes before transferring to a wire rack to cool completely.",
      "Once cooled, spread a layer of strawberry jam on top of one of the cakes, then add the vegan whipped cream on top of the jam.",
      "Place the second cake on top, and dust with icing sugar. Decorate with fresh strawberries if desired. Slice and serve!"
  ],
  recipe_id: 20
},
{
  id: 21,
  total_time: 30,  // Total time is approximately 30 minutes
  serves: 4,
  is_vegetarian: true,  // Recipe is vegetarian
  is_vegan: true,       // Recipe is vegan
  ingredients: [
      "200g dark chocolate (at least 70% cocoa), chopped",
      "100g vegan butter",
      "150g caster sugar",
      "100g plain flour",
      "1 tsp baking powder",
      "Pinch of salt",
      "1 tsp vanilla extract",
      "Cocoa powder, for dusting"
  ],
  directions: [
      "Preheat the oven to 200°C (400°F) and grease four ramekins with vegan butter, dusting with cocoa powder.",
      "Melt the dark chocolate and vegan butter together in a heatproof bowl over a pan of simmering water, stirring until smooth.",
      "In a separate bowl, whisk together the caster sugar, flour, baking powder, and salt.",
      "Combine the melted chocolate mixture with the dry ingredients, and stir in the vanilla extract until well mixed.",
      "Divide the batter evenly among the prepared ramekins and place them on a baking tray.",
      "Bake in the preheated oven for 10-12 minutes until the edges are firm but the center is still soft.",
      "Allow to cool for 1 minute before inverting onto plates. Serve warm with vegan ice cream or berries."
  ],
  recipe_id: 21
},
{
  id: 22,
  total_time: 20,  // Total time is approximately 20 minutes
  serves: 12,
  is_vegetarian: true,  // Recipe is vegetarian
  is_vegan: true,       // Recipe is vegan
  ingredients: [
      "200g dark chocolate (at least 70% cocoa), chopped",
      "100ml coconut cream",
      "1 tsp vanilla extract",
      "Cocoa powder, for dusting",
      "Chopped nuts, shredded coconut, or sprinkles (for coating, optional)"
  ],
  directions: [
      "In a saucepan over low heat, combine the dark chocolate and coconut cream, stirring until melted and smooth.",
      "Remove from heat and stir in the vanilla extract. Allow to cool slightly.",
      "Refrigerate the mixture for about 30 minutes until it firms up.",
      "Once firm, scoop out small portions and roll into balls using your hands.",
      "Roll each truffle in cocoa powder or your choice of coating (nuts, coconut, or sprinkles).",
      "Place the truffles in the fridge to set for another 30 minutes. Serve chilled."
  ],
  recipe_id: 22
},
{
  id: 23,
  total_time: 25,  // Total time is approximately 25 minutes
  serves: 12,
  is_vegetarian: true,  // Recipe is vegetarian
  is_vegan: true,       // Recipe is vegan
  ingredients: [
      "200g all-purpose flour",
      "100g coconut oil, softened",
      "100g brown sugar",
      "50g caster sugar",
      "60ml almond milk (or any plant-based milk)",
      "1 tsp vanilla extract",
      "1 tsp baking soda",
      "Pinch of salt",
      "150g dark chocolate chips"
  ],
  directions: [
      "Preheat the oven to 180°C (350°F) and line a baking tray with parchment paper.",
      "In a large bowl, mix the softened coconut oil, brown sugar, and caster sugar until well combined.",
      "Stir in the almond milk and vanilla extract until smooth.",
      "In another bowl, whisk together the flour, baking soda, and salt.",
      "Gradually add the dry ingredients to the wet ingredients, mixing until just combined.",
      "Fold in the dark chocolate chips.",
      "Scoop tablespoon-sized amounts of dough onto the prepared baking tray, spacing them apart.",
      "Bake in the preheated oven for 10-12 minutes or until lightly golden. Allow to cool slightly before transferring to a wire rack."
  ],
  recipe_id: 23
},
// Drinks
{
  id: 24,
  total_time: 30,  // Total time is approximately 30 minutes
  serves: 2,
  is_vegetarian: true,  // Recipe is vegetarian
  is_vegan: true,       // Recipe is vegan
  ingredients: [
      "1 cup tapioca pearls (boba)",
      "2 cups brewed black tea or green tea, cooled",
      "1/2 cup milk or plant-based milk (e.g., almond, soy, oat)",
      "2-4 tablespoons sweetener (e.g., sugar, honey, agave syrup) to taste",
      "Ice cubes",
      "Optional: fruit syrup or flavored powder (e.g., matcha, taro) for flavoring"
  ],
  directions: [
      "Cook the tapioca pearls according to the package instructions, usually boiling in water for about 5-10 minutes until they are soft and chewy. Drain and rinse under cold water.",
      "In a shaker or large glass, combine the brewed tea and sweetener. Stir or shake until the sweetener dissolves.",
      "Add the milk or plant-based milk to the tea mixture and stir well.",
      "In two glasses, add a portion of the cooked tapioca pearls.",
      "Pour the tea mixture over the pearls, add ice cubes, and stir gently.",
      "If desired, drizzle with fruit syrup or flavored powder for extra flavor. Serve with a wide straw."
  ],
  recipe_id: 24
},
{
  id: 25,
  total_time: 15,  // Total time is approximately 15 minutes
  serves: 4,
  is_vegetarian: true,  // Recipe is vegetarian
  is_vegan: true,       // Recipe is vegan
  ingredients: [
      "1 cup fresh strawberries, hulled and sliced",
      "1 cup freshly squeezed lemon juice (about 4-6 lemons)",
      "1 cup sugar (or to taste)",
      "4 cups water",
      "Ice cubes",
      "Sliced strawberries and lemon slices, for garnish (optional)"
  ],
  directions: [
      "In a blender, combine the sliced strawberries and half a cup of water. Blend until smooth.",
      "Strain the strawberry puree through a fine mesh sieve into a pitcher to remove the seeds.",
      "Add the freshly squeezed lemon juice, sugar, and the remaining water to the pitcher. Stir well until the sugar dissolves.",
      "Taste and adjust the sweetness if needed, adding more sugar or water to your preference.",
      "Serve over ice and garnish with sliced strawberries and lemon slices if desired."
  ],
  recipe_id: 25
},
// Smoothies
{
  id: 26,
  total_time: 10,  // Total time is approximately 10 minutes
  serves: 2,
  is_vegetarian: true,  // Recipe is vegetarian
  is_vegan: true,       // Recipe is vegan
  ingredients: [
      "2 ripe bananas",
      "1 cup almond milk (or any plant-based milk)",
      "1 tablespoon peanut butter (optional)",
      "1 tablespoon honey or maple syrup (optional)",
      "Ice cubes (optional)"
  ],
  directions: [
      "In a blender, combine the ripe bananas, almond milk, peanut butter, and sweetener if using.",
      "Blend until smooth and creamy. If you prefer a thicker consistency, add ice cubes and blend again.",
      "Pour into glasses and serve immediately."
  ],
  recipe_id: 26
},
{
  id: 27,
  total_time: 10,  // Total time is approximately 10 minutes
  serves: 2,
  is_vegetarian: true,  // Recipe is vegetarian
  is_vegan: true,       // Recipe is vegan
  ingredients: [
      "4 ripe passion fruits, halved and seeds scooped out",
      "1 banana",
      "1 cup coconut water or almond milk",
      "1 tablespoon honey or agave syrup (optional)",
      "Ice cubes"
  ],
  directions: [
      "In a blender, combine the passion fruit pulp, banana, coconut water, and sweetener if using.",
      "Blend until smooth. If you like it chilled, add ice cubes and blend again.",
      "Pour into glasses and enjoy immediately."
  ],
  recipe_id: 27
},
{
  id: 28,
  total_time: 10,  // Total time is approximately 10 minutes
  serves: 2,
  is_vegetarian: true,  // Recipe is vegetarian
  is_vegan: true,       // Recipe is vegan
  ingredients: [
      "2 cups kale, stems removed and chopped",
      "1 ripe banana",
      "1 cup almond milk (or any plant-based milk)",
      "1 tablespoon chia seeds (optional)",
      "1 tablespoon honey or maple syrup (optional)",
      "Ice cubes (optional)"
  ],
  directions: [
      "In a blender, combine the chopped kale, banana, almond milk, chia seeds, and sweetener if using.",
      "Blend until smooth, adding ice cubes if desired for a colder smoothie.",
      "Pour into glasses and serve immediately."
  ],
  recipe_id: 28
},
{
  id: 29,
  total_time: 10,  // Total time is approximately 10 minutes
  serves: 2,
  is_vegetarian: true,  // Recipe is vegetarian
  is_vegan: true,       // Recipe is vegan
  ingredients: [
      "1 ripe mango, peeled and chopped",
      "1 banana",
      "1 cup coconut milk or almond milk",
      "1 tablespoon honey or agave syrup (optional)",
      "Ice cubes"
  ],
  directions: [
      "In a blender, combine the chopped mango, banana, coconut milk, and sweetener if using.",
      "Blend until smooth. Add ice cubes if you prefer a chilled smoothie.",
      "Pour into glasses and serve immediately."
  ],
  recipe_id: 29
},
{
  id: 30,
  total_time: 10,  // Total time is approximately 10 minutes
  serves: 2,
  is_vegetarian: true,  // Recipe is vegetarian
  is_vegan: true,       // Recipe is vegan
  ingredients: [
      "1 cup fresh or frozen pineapple chunks",
      "1 banana",
      "1 cup coconut milk or yogurt",
      "1 tablespoon shredded coconut (optional)",
      "Ice cubes"
  ],
  directions: [
      "In a blender, combine the pineapple chunks, banana, coconut milk, and shredded coconut if using.",
      "Blend until smooth, adding ice cubes for a chilled smoothie.",
      "Pour into glasses and serve immediately."
  ],
  recipe_id: 30
},
];
