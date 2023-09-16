from pydantic import BaseModel, Field


class accountDetailBase(BaseModel):
    memberNo: int
    date: str = Field
    time: str = Field
    state: str = Field
    withdraw: int = Field
    deposit: int = Field
    content: str = Field
    balance: int = Field
    ctype: str = Field
    dname: str = Field

    class Config:
        orm_mode = True
