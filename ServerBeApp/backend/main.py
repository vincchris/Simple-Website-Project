from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
  CORSMiddleware,
  allow_origins=["*"],
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)

class UserItem(BaseModel):
  username: str
  email: str

@app.post("/submit-json")
async def receive_json(payload: UserItem):
  return {"message": "data successfully!", "data": payload}