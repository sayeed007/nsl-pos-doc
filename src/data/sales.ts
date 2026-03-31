export const salesPageData = {
  hero: {
    eyebrow: "Sales ready pack",
    title: "Sales Messages, Demo Flow, and Objection Handling in One Place",
    summary:
      "Built for product-based retail businesses, from a single store to a growing multi-branch operation. Brings sales, stock control, promotions, customer management, and reporting into one system.",
    bullets: [
      "Helps businesses track inventory by store or warehouse, not just as one total number",
      "Makes it easier to run offers, discounts, bundles, and seasonal campaigns",
      "Gives owners better visibility into revenue, payment trends, top-selling categories, and low-stock items",
      "Replaces spreadsheets, manual stock tracking, and basic billing-only tools with a more complete retail system",
    ],
  },
  whyItSells: [
    "More than a POS: it helps run the retail business",
    "A clear upgrade from spreadsheets and billing-only tools",
    "Supports business growth from one outlet to multiple locations",
    "Combines stock control, promotions, customer tracking, and reporting in one system",
    "Helps protect revenue through better visibility and better retail discipline",
  ],
  tabs: {
    sellingPoints: [
      "More than a billing tool. It helps run the retail business, not just process transactions.",
      "Strong fit for businesses that have outgrown spreadsheets or a basic POS.",
      "Gives clear stock visibility by store and warehouse.",
      "Supports retail growth from one outlet to multiple locations.",
      "Makes promotions easier to launch and easier to manage.",
      "Helps reduce stock mistakes, stockouts, and manual correction work.",
      "Speeds up checkout with barcode-based selling and organized product search.",
      "Supports businesses that sell many SKUs, sizes, styles, or variants.",
      "Keeps sales, returns, customers, and reporting connected in one workflow.",
      "Helps owners make faster decisions with live business visibility.",
      "Useful for both day-to-day staff operations and owner-level control.",
      "Easy to position as a step up from manual retail management.",
    ],
    conversations: [
      {
        trigger: "We have two shops and stock is always mixed up",
        response:
          "This is exactly where the product adds value. You can track stock by location and move inventory between branches instead of guessing where items are.",
      },
      {
        trigger: "We still manage stock in Excel",
        response:
          "That usually works until mistakes start costing time and money. This gives you live stock control inside the selling system, so your team is not updating separate sheets.",
      },
      {
        trigger: "We run offers a lot, but staff apply them differently",
        response:
          "You can set offers inside the system, so promotions become structured and consistent instead of depending on staff memory.",
      },
      {
        trigger: "We sell many sizes and product variations",
        response:
          "That is a strong fit. The system is built to handle variant-based products and barcode-driven selling much more cleanly.",
      },
      {
        trigger: "I want to know what is selling without checking everything manually",
        response:
          "The dashboard and reports are made for that. You can quickly see revenue, top categories, payment trends, and low-stock items.",
      },
      {
        trigger: "Returns create a mess for us",
        response:
          "Returns are tied back to the original sale, and resellable items can go back into stock, so refunds and inventory stay more controlled.",
      },
      {
        trigger: "I am opening another branch soon",
        response:
          "This is a good time to move now, because the product is better suited to growth than a single-store billing setup.",
      },
    ],
    demo: [
      {
        step: "Start with the dashboard",
        show: "Revenue, orders, low-stock view, top categories, payment trends",
        say:
          "This is the owner view. In one screen, you can see how the business is performing and what needs attention today.",
      },
      {
        step: "Show product creation and catalog organization",
        show: "Categories, product details, variants, barcodes",
        say:
          "This is where the business builds a sale-ready catalog. It works well for stores with many items, sizes, styles, or barcodes.",
      },
      {
        step: "Show stock by location",
        show: "Inventory by location, stock movement history, low-stock view",
        say:
          "Instead of one stock number for the whole business, you can see what is available at each store or warehouse.",
      },
      {
        step: "Show stock transfer between locations",
        show: "Create transfer, ship, receive",
        say:
          "This is important for growing retailers. You can move stock where demand is higher instead of buying blindly.",
      },
      {
        step: "Show offers and promotions",
        show: "Discount types, bundle or Buy X Get Y setup, date-based offers",
        say:
          "Promotions become easier to control because they are built into the selling process, not handled manually.",
      },
      {
        step: "Show the POS sale flow",
        show: "Search or barcode lookup, add products, attach a customer, take payment, complete sale",
        say:
          "This is the day-to-day staff workflow. It is built to keep checkout fast while still capturing the right sales data.",
      },
      {
        step: "Show a return",
        show: "Find original sale, select returned items, refund, optional restock",
        say:
          "Returns stay connected to the original transaction, which helps keep both refunds and stock cleaner.",
      },
      {
        step: "End with reports",
        show: "Sales report, product performance, payment-method breakdown, export option",
        say:
          "This is where owners move from daily transactions to better business decisions.",
      },
    ],
    objections: [
      {
        objection: "I already use Excel",
        response:
          "Excel can track data, but it does not run retail operations. This saves daily time, reduces manual errors, and gives live visibility while your team is selling.",
      },
      {
        objection: "I only have one store",
        response:
          "That is still a good fit if stock control, promotions, and reporting matter to you now. It also gives you room to grow without changing systems later.",
      },
      {
        objection: "We already have a POS",
        response:
          "If your current system mainly handles billing, this adds the business control layer: stock by location, promotions, customer tracking, returns, and reporting.",
      },
      {
        objection: "My staff are not technical",
        response:
          "The day-to-day workflows are practical and role-based. Staff focus on selling, while owners and managers get the control and visibility they need.",
      },
      {
        objection: "Switching systems sounds difficult",
        response:
          "The move is easier when done around your catalog, locations, and daily workflow. The product also supports bulk setup for larger item lists.",
      },
      {
        objection: "We do not run promotions often",
        response:
          "That is fine. The value is still strong because stock control, reporting, checkout, and customer tracking matter every day.",
      },
      {
        objection: "How will this help me make more money?",
        response:
          "It helps protect sales through better stock visibility, faster checkout, structured promotions, and stronger repeat customer tracking.",
      },
      {
        objection: "I need tighter control over staff and branches",
        response:
          "That is one of the strongest use cases. You get better visibility across locations and more accountability inside daily operations.",
      },
    ],
  },
  featureBenefitAngleRows: [
    ["Multi-location stock control", "Shows stock by store or warehouse", "\"If you have more than one location, this gives you one view of stock instead of constant branch confusion.\""],
    ["Stock transfers", "Move inventory where demand is highest", "\"Instead of overbuying, you can shift stock between branches and use what you already have.\""],
    ["Product variants and barcodes", "Faster, more accurate checkout for large catalogs", "\"If you sell sizes, styles, or similar items, this makes billing much cleaner for staff.\""],
    ["Bulk product upload", "Faster setup for stores with many products", "\"You do not need to build your catalog one item at a time.\""],
    ["Offers and promotions", "Run campaigns without manual discounting", "\"This helps you sell more during campaigns while keeping discounts controlled.\""],
    ["Customer profiles and loyalty", "Encourages repeat business", "\"It helps you remember your customers and turn walk-ins into repeat buyers.\""],
    ["Returns handling", "Cleaner refunds and better stock recovery", "\"Returns stop being messy because they stay tied to the original sale.\""],
    ["Dashboard and reports", "Better business decisions", "\"Owners can see what is happening without waiting for end-of-month guesswork.\""],
    ["User accounts and roles", "Better staff accountability", "\"Your team gets access based on their role, so operations stay more controlled.\""],
    ["Split payments", "Smoother checkout", "\"It fits real checkout behavior when customers want to pay in more than one way.\""],
  ],
  marketingTalkingPoints: [
    "Run your sales, stock, promotions, and customer tracking from one system.",
    "Manage one store or multiple outlets without losing visibility.",
    "Track stock by location and move inventory between stores or warehouses.",
    "Run promotions like percentage discounts, bundles, and Buy X Get Y without manual workarounds.",
    "Speed up checkout with barcode-based selling and split payments.",
    "Keep customer records and loyalty activity in the same place as sales.",
    "Process returns more cleanly and keep inventory aligned.",
    "Give owners clearer daily insight into revenue, payments, top categories, and low-stock items.",
  ],
  positioning: {
    bestFor: [
      "Product-based retail businesses",
      "Small to mid-sized businesses",
      "Growing multi-branch retailers",
      "Stores with frequent promotions, many SKUs, or stock movement between locations",
    ],
    bestStage: [
      "Businesses moving beyond manual management",
      "Businesses that have outgrown a billing-only POS",
      "Businesses preparing to scale from one branch to several",
    ],
    replaces: [
      "Excel-based stock tracking",
      "Manual notebooks and disconnected retail processes",
      "Basic POS tools that only handle billing",
      "Separate tools for sales, stock, promotions, and customer tracking",
    ],
    doNotTarget: [
      "Restaurant-focused businesses",
      "Supplier or purchase-order led operations",
      "Businesses expecting a hardware-led sales pitch",
      "Very complex enterprise buyers looking for deep custom governance from day one",
    ],
  },
  packagingPreview: [
    {
      name: "Starter",
      audience: "For single-store retailers",
      summary: "Core POS, products, stock tracking, customer records, standard reports",
    },
    {
      name: "Growth",
      audience: "For growing multi-store businesses",
      summary: "Multi-location stock, transfers, promotions, loyalty, richer reporting",
    },
    {
      name: "Advanced",
      audience: "For more mature retail operations",
      summary: "Deeper reporting, broader operational control, premium onboarding and support",
    },
  ],
  closingLines: [
    "This will save your team time every day, not just at month-end.",
    "You will know what is selling, where stock is, and what needs action.",
    "This gives you more control without adding more manual work.",
    "It is a smart step up from spreadsheets and billing-only tools.",
    "Your stores can sell faster while you manage with more confidence.",
    "As your business grows, the system grows with you.",
    "Promotions become easier to run and easier to control.",
    "You get one retail system instead of several disconnected processes.",
    "This is built to help you operate better today and scale better tomorrow.",
  ],
} as const;
