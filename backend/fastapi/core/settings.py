from sqlalchemy.orm import declarative_base


class Settings:
    API_PREFIX: str = '/api/v1'
    DATABASE_URL: str = 'sqlite:///db.sqlite3'