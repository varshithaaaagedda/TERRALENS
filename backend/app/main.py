"""
TerraLens FastAPI Backend Application
AI-Powered Climate Intelligence & Greenwashing Detection Platform
Enterprise Production Engine
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes import router

app = FastAPI(
    title="TerraLens API",
    description="AI-powered climate intelligence platform investigating corporate sustainability claims with blockchain verification.",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

# Enable CORS for Next.js and frontend dev servers
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)

@app.get("/")
def root():
    return {
        "platform": "TerraLens",
        "tagline": "See Beyond Sustainability Claims.",
        "edition": "Enterprise Forensics v2.6",
        "docs": "/docs",
        "status": "online"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)
