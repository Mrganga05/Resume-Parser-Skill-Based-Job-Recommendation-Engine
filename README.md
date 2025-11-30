# AI Career Coach

An intelligent career guidance platform that helps users discover personalized job recommendations and create customized learning plans based on their resume and skills. This application combines AI-powered resume parsing, skill extraction, and job matching to provide career insights.

## 🎯 Features

- **Resume Parser**: Upload and parse resumes to extract key skills, experience, and qualifications
- **Job Recommendations**: Get personalized job recommendations based on your profile and skills
- **Learning Plans**: Generate customized learning plans to bridge skill gaps and advance your career
- **Skill Analysis**: Comprehensive analysis of your current skills and market demand
- **User Authentication**: Secure user management with JWT authentication
- **Dashboard**: Interactive dashboard to manage profiles, view recommendations, and track progress

## 🏗️ Project Structure

```
ai-career-coach/
├── backend/                    # FastAPI backend server
│   ├── app/
│   │   ├── main.py            # FastAPI application entry point
│   │   ├── config.py          # Configuration management
│   │   ├── db.py              # Database connection
│   │   ├── models.py          # Pydantic data models
│   │   ├── routes/            # API endpoints
│   │   │   ├── resume.py      # Resume parsing endpoints
│   │   │   ├── recommend.py   # Job recommendation endpoints
│   │   │   ├── jobs.py        # Job management endpoints
│   │   │   └── users.py       # User management endpoints
│   │   └── services/          # Business logic services
│   │       ├── resume_parser.py      # PDF resume parsing
│   │       ├── recommender.py        # ML-based recommendations
│   │       ├── learning_plan.py      # Learning plan generation
│   │       └── security.py           # Authentication & security
│   ├── requirements.txt        # Python dependencies
│   └── check_models.py         # Model verification utility
│
└── frontend/                   # Next.js frontend application
    ├── app/                    # Next.js app directory
    │   ├── layout.tsx          # Root layout component
    │   ├── page.tsx            # Home page
    │   └── globals.css         # Global styles
    ├── components/             # Reusable React components
    │   ├── pages/              # Page-specific components
    │   │   ├── Dashboard.tsx
    │   │   ├── Home.tsx
    │   │   └── Upload.tsx
    │   ├── sections/           # Feature sections
    │   │   ├── JobRecommendations.tsx
    │   │   ├── LearningPlan.tsx
    │   │   └── SkillsSection.tsx
    │   └── ui/                 # UI component library (Radix UI)
    ├── hooks/                  # Custom React hooks
    ├── lib/                    # Utility functions
    ├── package.json            # Node.js dependencies
    └── tsconfig.json           # TypeScript configuration
```

## 🛠️ Tech Stack

### Backend
- **Framework**: FastAPI (Python web framework)
- **Server**: Uvicorn
- **Database**: MongoDB
- **Authentication**: JWT, Passlib with bcrypt
- **ML/AI**: Sentence Transformers, Scikit-learn, PyTorch, NumPy
- **Document Processing**: PDFPlumber

### Frontend
- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS, PostCSS
- **UI Components**: Radix UI
- **State Management**: React Hook Form, Zod
- **HTTP Client**: Axios
- **Animations**: Framer Motion
- **Charts**: Recharts

## 🚀 Getting Started

### Prerequisites
- Python 3.8+ (for backend)
- Node.js 18+ and pnpm (for frontend)
- MongoDB (local or cloud instance)

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Create a virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure environment variables**
   Create a `.env` file in the `backend/` directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017
   DATABASE_NAME=ai_career_coach
   JWT_SECRET_KEY=your_secret_key_here
   JWT_ALGORITHM=HS256
   ```

5. **Run the backend server**
   ```bash
   uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
   ```
   
   The API will be available at `http://localhost:8000`

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Configure API endpoint**
   Update `lib/api.ts` with your backend URL if different from `http://localhost:8000`

4. **Run the development server**
   ```bash
   pnpm dev
   ```
   
   The frontend will be available at `http://localhost:3000`

## 📚 API Endpoints

### Resume Endpoints
- `POST /resume/upload` - Upload and parse resume
- `GET /resume/{user_id}` - Get parsed resume data

### Recommendation Endpoints
- `POST /recommend/jobs` - Get job recommendations based on skills
- `POST /recommend/learning-plan` - Generate learning plan for skill development

### Jobs Endpoints
- `GET /jobs` - List available jobs
- `GET /jobs/{job_id}` - Get job details

### User Endpoints
- `POST /users/register` - Register new user
- `POST /users/login` - User login
- `GET /users/{user_id}` - Get user profile

## 🤖 How It Works

1. **Resume Upload**: Users upload their resume in PDF format
2. **Skill Extraction**: The system parses the resume and extracts skills, experience, and qualifications
3. **Job Matching**: Using sentence transformers and semantic search, the system matches user skills to job requirements
4. **Learning Plan**: AI generates personalized learning paths to help users acquire in-demand skills
5. **Dashboard**: Users can view recommendations, track progress, and manage their career development

## 🔐 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- CORS protection
- Input validation with Pydantic
- Secure environment variable management

## 📝 Development

### Adding New Features

1. **Backend**: Add new routes in `backend/app/routes/`
2. **Services**: Implement business logic in `backend/app/services/`
3. **Frontend**: Create new components in `frontend/components/`
4. **Styling**: Use Tailwind CSS classes for consistency

### Code Structure
- **Models**: Data validation and database schemas
- **Routes**: HTTP endpoint definitions
- **Services**: Reusable business logic
- **Components**: Reusable UI elements

## 🐛 Troubleshooting

### Backend Issues
- **MongoDB Connection Failed**: Ensure MongoDB is running and connection string is correct
- **Port Already in Use**: Change the port with `--port 8001`
- **Module Not Found**: Run `pip install -r requirements.txt` again

### Frontend Issues
- **Dependencies Not Installed**: Run `pnpm install`
- **Tailwind Styles Not Applied**: Ensure PostCSS and Tailwind are configured
- **API Connection Issues**: Check backend is running and CORS is enabled

## 📦 Deployment

### Backend Deployment
- Deploy to AWS EC2, Google Cloud Run, or Heroku
- Use environment variables for sensitive configuration
- Ensure MongoDB is accessible from deployment environment

### Frontend Deployment
- Build: `pnpm build`
- Deploy to Vercel, Netlify, or any static hosting
- Update API endpoint for production environment

## 🤝 Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 📞 Support

For issues, questions, or suggestions, please open an issue in the repository.

---
