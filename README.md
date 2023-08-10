# Dictate MD <> Manoj

## Description
This is a search application built using the MERN (MongoDB, Express, React, Node.js) stack. The app allows users to search for specific keywords or phrases, and it returns results with the searched text highlighted. The application stores documents and text in a database and retrieves them based on user searches. Users can also add their own documents through the UI, specifying properties like author, date, and name. To improve performance, a caching layer is implemented to reduce database access frequency.

## Installation and Usage
1. **Clone the repository:**
   ```bash
   git clone https://github.com/manojdm/dictatemd-blog.git
   ```

2. **Navigate to the frontend directory and install frontend dependencies:**
   ```bash
   cd frontend
   npm install
   ```

3. **Run the frontend:**
   ```bash
   npm start
   ```

4. **Open a new terminal window, navigate to the backend directory, and install backend dependencies:**
   ```bash
   npm install
   ```

5. **Run the backend:**
   ```bash
   npm run dev
   ```

6. **Create a `.env` file in the backend directory and add your MongoDB Atlas connection string:**
   ```
   MONGODB_URI=your-mongodb-atlas-uri
   ```

7. **Access the application in your browser at [http://localhost:3000](http://localhost:3000).**

## Technologies Used
- **Frontend:** React (with Redux for state management)
- **Backend:** Node.js, Express
- **Database:** MongoDB

## Features
- Search for keywords or phrases with highlighted results
- Add and manage documents with custom properties
- Redux State Management as Caching layer for optimized performance (To prevent quering everytime)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
