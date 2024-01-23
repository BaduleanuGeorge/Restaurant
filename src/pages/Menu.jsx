import React, { useEffect } from "react";
import MenuItemComp from "../components/MenuItemComp";
import MenuFood1 from "../assets/MenuFood1.jpg";
import MenuFood2 from "../assets/MenuFood2.jpg";
import MenuFood3 from "../assets/MenuFood3.jpg";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import CTAComponent from "../components/CTAComponent";

function Menu() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full h-auto">
      {/* TOP BANNER */}
      <div className="w-full h-[200px] lg:h-[250px] bg-[url(../src/assets/MenuPageBG.jpg)] bg-center bg-cover">
        <div className="w-full h-full bg-black/60 flex justify-center items-center">
          <h1 className="font-custom text-4xl md:text-5xl text-white">
            From our menu
          </h1>
        </div>
      </div>

      {/* MENU */}
      <div className="w-full h-auto bg-[#0b090a] py-14 px-3">
        {/* APPETIZERS */}
        <div className="max-w-7xl mx-auto h-auto">
          <h1 className="text-xl lg:text-2xl font-bold text-white border-b-[1px]">
            Appetizers
          </h1>
          <div className="flex gap-8 justify-evenly pt-2 lg:pt-10">
            <div>
              <MenuItemComp
                title="Bruschetta"
                description="Toasted baguette slices topped with diced tomatoes, fresh basil, garlic, and drizzled with extra-virgin olive oil."
                price="£6.99"
              />
              <MenuItemComp
                title="Mozzarella Sticks"
                description="Golden-fried mozzarella cheese sticks served with a zesty marinara dipping sauce."
                price="£8.99"
              />
              <MenuItemComp
                title="Spinach and Artichoke Dip"
                description="Creamy blend of spinach, artichokes, and cheese, served hot with tortilla chips or bread for dipping."
                price="£9.99"
              />
              <MenuItemComp
                title="Stuffed Mushrooms"
                description="Mushroom caps filled with a savory mixture of breadcrumbs, herbs, and cheese, then baked to perfection."
                price="£8.99"
              />
              <MenuItemComp
                title="Spring Rolls"
                description="Crispy, vegetable-filled spring rolls, served with a sweet chili dipping sauce."
                price="£7.99"
              />
              <MenuItemComp
                title="Potato Skins"
                description="Crispy potato skins loaded with cheese, bacon bits, and sour cream."
                price="£9.99"
              />
              <MenuItemComp
                title="Caprese Salad"
                description="Slices of ripe tomatoes and fresh mozzarella, garnished with basil leaves, drizzled with balsamic glaze and olive oil."
                price="£13.99"
              />
            </div>
            <div className="hidden lg:flex">
              <img
                src={MenuFood1}
                className="max-w-[400px] max-h-[600px] rounded-md"
              />
            </div>
          </div>
        </div>

        {/* MAIN COURSES */}
        <div className="pt-14 max-w-7xl mx-auto h-auto">
          <h1 className="text-xl lg:text-2xl font-bold text-white border-b-[1px]">
            Main courses
          </h1>
          <div className="flex gap-8 justify-evenly pt-2 lg:pt-10">
            <div className="hidden lg:flex">
              <img
                src={MenuFood3}
                className="max-w-[400px] max-h-[600px] rounded-md"
              />
            </div>
            <div>
              <MenuItemComp
                title="Spaghetti Bolognese"
                description="Classic Italian pasta dish with a rich meat sauce, served with freshly grated Parmesan cheese."
                price="£12.99"
              />
              <MenuItemComp
                title="Chicken Parmesan"
                description="Breaded and fried chicken cutlet topped with marinara sauce and melted cheese, served with pasta."
                price="£16.99"
              />
              <MenuItemComp
                title="Chicken Pad Thai"
                description="Stir-fried rice noodles with chicken, tofu, bean sprouts, and peanuts in a tangy tamarind sauce."
                price="£13.99"
              />
              <MenuItemComp
                title="Teriyaki Salmon"
                description="Grilled salmon glazed with teriyaki sauce, served with steamed jasmine rice and stir-fried vegetables."
                price="£18.99"
              />
              <MenuItemComp
                title="Beef and Broccoli"
                description="Sliced beef and broccoli florets in a savory soy-based sauce, served with steamed rice."
                price="£14.99"
              />
              <MenuItemComp
                title="Grilled Shrimp Scampi"
                description="Jumbo shrimp marinated in garlic and lemon, grilled to perfection, and served with linguine."
                price="£17.99"
              />
              <MenuItemComp
                title="Lobster Risotto"
                description="Creamy risotto with chunks of lobster meat, saffron, and a hint of white wine."
                price="£28.99"
              />
              <MenuItemComp
                title="Seafood Paella"
                description="A Spanish classic with saffron-infused rice, mussels, clams, shrimp, and chorizo, garnished with fresh herbs."
                price="£24.99"
              />
              <MenuItemComp
                title="Sushi Combo"
                description="A selection of fresh sushi and sashimi, accompanied by pickled ginger, wasabi, and soy sauce."
                price="£22.99"
              />
            </div>
          </div>
        </div>

        {/* DESERTS */}
        <div className="max-w-7xl mx-auto h-auto pt-14">
          <h1 className="text-xl lg:text-2xl font-bold text-white border-b-[1px]">
            Deserts
          </h1>
          <div className="flex gap-8 justify-evenly pt-2 lg:pt-10">
            <div>
              <MenuItemComp
                title="Tiramisu"
                description="A classic Italian dessert with layers of coffee-soaked ladyfingers, mascarpone cheese, and cocoa powder."
                price="£7.99"
              />
              <MenuItemComp
                title="Molten Chocolate Lava Cake"
                description="A warm and gooey chocolate cake with a molten center, often served with a scoop of vanilla ice cream."
                price="£9.99"
              />
              <MenuItemComp
                title="Green Tea Matcha Ice Cream"
                description="Creamy and slightly bitter matcha green tea-flavored ice cream, a popular choice in Asian cuisine."
                price="£8.99"
              />
              <MenuItemComp
                title="Cheesecake with Fruit Compote"
                description="A rich and creamy cheesecake topped with a vibrant fruit compote, such as raspberry or blueberry."
                price="£9.99"
              />
              <MenuItemComp
                title="Lemon Sorbet"
                description="A refreshing and tangy frozen dessert made from lemon juice and sugar, perfect for cleansing the palate."
                price="£7.99"
              />
              <MenuItemComp
                title="Creme Brulee"
                description="A velvety custard dessert with a crisp caramelized sugar topping, often served in a ramekin."
                price="£8.99"
              />
              <MenuItemComp
                title="Chocolate Fondue"
                description="A fun and interactive dessert where bite-sized pieces of fruit, marshmallows, and cake are dipped into a pot of melted chocolate."
                price="£10.99"
              />
            </div>
            <div className="hidden lg:flex">
              <img
                src={MenuFood2}
                className="max-w-[400px] max-h-[600px] rounded-md"
              />
            </div>
          </div>
        </div>
      </div>

      <CTAComponent />
    </div>
  );
}

export default Menu;
