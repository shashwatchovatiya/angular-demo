## 🧩 Angular Mini Project: *Product Management Dashboard*
 
 ### 📌 Objective:
 
 Build a single-page Angular application to manage a list of products. The app should demonstrate routing, component interaction, forms, services, directives, pipes, and use of Angular CLI.
 
 ---
 
 ### 🏗️ Functional Requirements
 
 #### ✅ 1. *Dashboard Page* (/dashboard)
 
 * Display a list of products in a table.
 * Each product should have the following fields:
 
   * id (number, auto-incremented)
   * name (string)
   * price (number)
   * status (boolean - true: Available, false: Unavailable)
 * Add a button/link to navigate to the Add Product page.
 * Use a custom pipe to transform the status:
 
   * true → ✔️ Available
   * false → ❌ Unavailable
 * Use a custom directive to highlight rows where price > 1000 (e.g., background yellow).
 
 #### ✅ 2. *Add Product Page* (/add-product)
 
 * Form with the following fields:
 
   * Name (input, required)
   * Price (number input, required, min 1)
   * Status (checkbox or dropdown)
 * Use *Reactive Forms*.
 * Display inline validation errors (e.g., "Price must be greater than 0").
 * On form submit:
 
   * Save the product using a service.
   * Redirect to /dashboard.
 
 #### ✅ 3. *Routing*
 
 * Define and configure routing for:
 
   * /dashboard
   * /product
   * /product/:id
 * Add a default route redirecting to /dashboard.
 
 #### ✅ 4. *Service Layer*
 
 * Create a ProductService:
 
   * Store the product list in-memory (array).
   * Provide methods:
 
     * getProducts(): Product[]
     * addProduct(product: Product): void
 * Keep the Product model in a separate TypeScript file.
 
 #### ✅ 5. *Components*
 
 * Minimum components required:
 
   * DashboardComponent (table view)
   * AddProductComponent (form)
   * ProductRowComponent (optional – for table rows)
 * Use @Input() and @Output() if component communication is needed.
 
 ---
 
 ### 🧰 Technical Requirements
 
 | Feature        | Must Include                                     |
 | -------------- | ------------------------------------------------ |
 | Angular CLI    | Use CLI to scaffold project & components         |
 | Styling        | Basic styling with Bootstrap or Angular Material |
 | Pipe           | Custom pipe for availability status              | Product Date Pipe
 | Directive      | Custom directive to highlight expensive items    | 
 | Lifecycle Hook | Use ngOnInit to fetch product list             |
 | Validation     | Form validation with meaningful messages         |
 | Routing        | With links and navigation logic                  |
 | Types          | Use interface Product with proper typing       |
 | Code Quality   | Clear folder structure, naming conventions       |
 
 ---
 
 ### 🧠 Bonus (Optional)
 
 * Add a search bar on Dashboard to filter by product name.
 * Add a confirmation dialog before adding a product.
 * Persist products using localStorage.
 
 ---
 
 ### 📁 Suggested Folder Structure
 
 
 src/
 ├── app/
 │   ├── components/
 │   │   ├── dashboard/
 │   │   ├── add-product/
 │   ├── services/
 │   │   └── product.service.ts
 │   ├── pipes/
 │   │   └── status.pipe.ts
 │   ├── directives/
 │   │   └── highlight.directive.ts
 │   ├── models/
 │   │   └── product.model.ts
 │   ├── app-routing.module.ts
 │   └── app.module.ts
 
 
 ---
 
 ### 📦 Deliverables
 
 * A working Angular app fulfilling the above requirements.
 * Source code (via Git repo or zip).
 * Should be buildable and runnable using:
 
   bash
   npm install
   ng serve
   
 
 ---
 
 Let me know if you'd like me to generate the *starter Angular app code* or *template project* to help you kick it off or share with the team!