# Visual Paradigm UML Generation Prompt for Festive Feast Pro

## Project Overview Prompt

```
Create comprehensive UML diagrams for "Festive Feast Pro" - a modern React-based catering service web application with the following characteristics:

PROJECT DESCRIPTION:
- Bilingual catering service website (English/Tamil)
- React frontend with TypeScript
- Shopping cart functionality for menu items
- Booking system for catering events
- Gallery showcase and customer reviews
- Mobile-responsive design with Tailwind CSS

CORE ENTITIES:
1. MenuItem (id, name{en,ta}, category, image, description{en,ta})
2. CartItem (id, name{en,ta}, category)
3. Booking (name, contact, email, eventType, eventDate, guestCount, message)
4. Review (id, name, content{en,ta}, rating, image)
5. GalleryImage (id, image, title{en,ta}, category)
6. User (customer/admin roles)

MAIN COMPONENTS:
- App (main application)
- Layout (navbar, footer)
- Pages (Index, Menu, Gallery, Reviews, Booking, Contact)
- Contexts (LanguageContext, CartContext)
- UI Components (Card, Button, Input, Dialog, etc.)

KEY FEATURES:
- Multi-language support
- Shopping cart management
- Event booking system
- Image gallery with categories
- Customer review system
- Contact form
- Responsive navigation

RELATIONSHIPS:
- MenuItem belongs to Category
- CartItem references MenuItem
- Booking has EventType
- Review belongs to Customer
- Gallery images categorized
- Context providers manage global state

TECHNICAL STACK:
- Frontend: React 18 + TypeScript
- Styling: Tailwind CSS + Radix UI
- State Management: React Context API
- Routing: React Router
- Animation: Framer Motion
- Data: JSON files (future: REST API)

GENERATE THESE UML DIAGRAMS:
1. Class Diagram - showing all entities and relationships
2. Use Case Diagram - customer and admin interactions
3. Component Diagram - React component architecture
4. Sequence Diagram - cart management flow
5. Activity Diagram - booking process flow
6. State Diagram - cart state transitions
7. Package Diagram - project structure
```

## Detailed Component Breakdown Prompt

```
REACT COMPONENT HIERARCHY:

App
├── LanguageProvider
├── CartProvider
├── BrowserRouter
└── Layout
    ├── Navbar (cart count, language toggle, navigation)
    └── Routes
        ├── Index Page
        │   ├── HeroSection
        │   ├── AboutSection
        │   └── EventCategories
        ├── Menu Page
        │   ├── MenuFilter
        │   ├── MenuCard[]
        │   └── CartSidebar
        ├── Gallery Page
        ├── Reviews Page
        ├── Booking Page
        └── Contact Page

CONTEXT PROVIDERS:
- LanguageContext: manages en/ta language switching
- CartContext: manages cart items, add/remove operations

UI COMPONENT LIBRARY:
- Card, Button, Input, Textarea
- Dialog, Sheet, Badge, Separator
- Carousel, Accordion, Tabs
- Form, Select, Calendar
- Toast, Alert, Progress

DATA MODELS:
- All text content has bilingual structure {en: string, ta: string}
- Categories: 'veg', 'non-veg', 'sweets'
- Event types: 'wedding', 'birthday', 'corporate', 'festival'
- Cart stored in localStorage
- Form validation for booking and contact
```

## Business Process Flow Prompt

```
BUSINESS WORKFLOWS TO MODEL:

1. CUSTOMER JOURNEY:
   - Visit website → Browse menu → Add to cart → Make booking
   - Language switching throughout journey
   - Contact for inquiries

2. MENU BROWSING:
   - View all items → Filter by category → View details → Add to cart
   - Cart management (add/remove/clear)

3. BOOKING PROCESS:
   - Fill form (name, contact, email, event type, date, guests, message)
   - Form validation → Submit → Confirmation message

4. ADMIN OPERATIONS:
   - Manage menu items
   - Process bookings
   - Manage gallery images
   - Moderate reviews

5. SYSTEM STATES:
   - Empty cart ↔ Cart with items
   - English ↔ Tamil language
   - Form states: empty → filled → validated → submitted

INTEGRATION POINTS:
- Language context affects all displayed text
- Cart context affects navbar badge and sidebar
- Local storage persistence for cart data
- Future API integration points for CRUD operations
```

## Technical Architecture Prompt

```
SYSTEM ARCHITECTURE FOR UML:

PRESENTATION LAYER:
- React functional components with hooks
- Responsive design (mobile-first)
- Component composition pattern
- Props drilling vs Context usage

STATE MANAGEMENT:
- React Context API for global state
- useState for local component state
- localStorage for data persistence
- Custom hooks for reusable logic

DATA LAYER:
- JSON files as data source (current)
- Future REST API endpoints
- Client-side data transformation
- Bilingual content structure

NAVIGATION & ROUTING:
- React Router for SPA routing
- Dynamic route parameters
- Protected routes (future admin)
- 404 error handling

STYLING & UI:
- Tailwind CSS utility classes
- Radix UI headless components
- Custom CSS variables for theming
- Responsive breakpoints

PERFORMANCE:
- Code splitting potential
- Image optimization
- Bundle size optimization
- Lazy loading strategies
```

## Visual Paradigm Specific Instructions

```
DIAGRAM GENERATION SETTINGS:

For Class Diagrams:
- Show relationships between React components
- Include props interfaces
- Show Context provider patterns
- Display custom hooks

For Use Case Diagrams:
- Primary actor: Customer
- Secondary actor: Admin
- Include extend/include relationships
- Show system boundary

For Sequence Diagrams:
- Show component lifecycle
- Context state updates
- Event handling flows
- API call sequences (future)

For Component Diagrams:
- Package by feature areas
- Show dependencies
- Include external libraries
- Display data flow

STYLING PREFERENCES:
- Modern, clean visual style
- Consistent color coding
- Clear relationship lines
- Readable font sizes
- Professional business appearance
```

## Copy-Paste Ready Prompt

```
Create UML diagrams for Festive Feast Pro catering web app: React+TypeScript SPA with bilingual support (English/Tamil), cart system, booking forms, gallery, reviews. Components: App→Layout(Navbar,Footer)→Pages(Index,Menu,Gallery,Reviews,Booking,Contact). Contexts: Language(en/ta toggle), Cart(add/remove items). Data: MenuItem{id,name{en,ta},category,image,description{en,ta}}, Booking{name,contact,email,eventType,date,guests}, Review{name,content{en,ta},rating}. Features: responsive design, form validation, localStorage cart, Tailwind CSS, Radix UI. Generate: Class diagram, Use case diagram, Component diagram, Sequence diagram (cart flow), Activity diagram (booking process), State diagram (cart states).
```

Use any of these prompts in Visual Paradigm's AI-powered diagram generation or mind mapping features. The detailed prompts will help generate comprehensive UML diagrams that accurately represent your Festive Feast Pro project structure and functionality.
