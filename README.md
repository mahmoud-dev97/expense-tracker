# Expense Tracker

A modern expense tracking application built with React, Redux Toolkit, and Tailwind CSS, featuring dark mode support and data persistence.

## Features

- Add expenses with name, amount, and category
- View list of expenses with total amount
- Filter expenses by category
- Delete expenses
- Dark mode support with persistent theme preference
- Data persistence using Redux Persist
- Form validation using Yup
- Responsive design

## Tech Stack

- React + Vite
- Redux Toolkit
- Redux Persist
- Tailwind CSS
- Yup (form validation)
- React Hook Form
- Lucide React (icons)

## Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/mahmoud-dev97/expense-tracker.git
\`\`\`

2. Navigate to the project directory:
\`\`\`bash
cd expense-tracker
\`\`\`

3. Install dependencies:
\`\`\`bash
npm install
\`\`\`

4. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

## Usage

1. Fill out the expense form with:
   - Expense name
   - Amount
   - Category

2. Click "Add Expense" to add the expense to the list

3. View your expenses in the list:
   - Filter by category using the dropdown
   - See the total amount of filtered expenses
   - Delete expenses by clicking the "Delete" button

4. Toggle dark mode:
   - Click the sun/moon icon in the bottom right corner
   - Your theme preference will be saved automatically

## Features in Detail

### Dark Mode
- Toggle between light and dark themes
- Theme preference is persisted across sessions
- Smooth transition animations
- Accessible color contrasts in both themes

### Data Persistence
- All expenses are automatically saved to localStorage
- Theme preference is preserved
- Data survives page refreshes and browser restarts

### Form Validation
- Required field validation
- Amount must be a positive number
- Category selection required
- Clear error messages
