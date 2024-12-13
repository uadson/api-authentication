from pydantic import BaseModel, Field, field_validator


class UserCreateSchema(BaseModel):
    username: str = Field(..., min_length=3, max_length=50)
    password: str = Field(..., min_length=8, max_length=128)
    
    @field_validator('name')
    @classmethod
    def username_not_must_be_empty(cls, value: str) -> str:
        if not value:
            raise ValueError('Username not must be empty')
        return value.lower()
    
    @field_validator('password')
    @classmethod
    def password_not_must_be_empty(cls, value: str) -> str:
        if not value:
            raise ValueError('Password not must be empty')
        return value


class UserResponseSchema(BaseModel):
    id: int
    username: str
    
    class Config:
        orm_mode = True
        

class UserLoginSchema(BaseModel):
    username: str
    password: str
