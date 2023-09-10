from pydantic import BaseModel
from typing import List, Optional


class DocumentMetadata(BaseModel):
    name: Optional[str] = None
    policyId: Optional[str] = None
    policyDetail: Optional[str] = None
    supportContent: Optional[str] = None
    supportScale: Optional[str] = None
    policyOperationPeriod: Optional[str] = None
    ageInfo: Optional[str] = None
    major: Optional[str] = None
    employeedStatus: Optional[str] = None
    specialized: Optional[str] = None
    academicAbility: Optional[str] = None
    ResiIncomeCondition: Optional[str] = None
    additional: Optional[str] = None
    restriction: Optional[str] = None
    applicationProcedure: Optional[str] = None
    submissionDocuments: Optional[str] = None
    judge: Optional[str] = None
    applicationURL: Optional[str] = None
    referenceURL1: Optional[str] = None
    referenceURL2: Optional[str] = None
    department: Optional[str] = None


class DocumentChunkMetadata(DocumentMetadata):
    document_id: Optional[str] = None


class DocumentChunk(BaseModel):
    id: Optional[str] = None
    text: str
    metadata: DocumentChunkMetadata
    embedding: Optional[List[float]] = None


class DocumentChunkWithScore(DocumentChunk):
    score: float


class Document(BaseModel):
    id: Optional[str] = None
    text: str
    metadata: Optional[DocumentMetadata] = None


class DocumentWithChunks(Document):
    chunks: List[DocumentChunk]


class DocumentMetadataFilter(BaseModel):
    name: Optional[str] = None
    policyId: Optional[str] = None
    policyDetail: Optional[str] = None
    supportContent: Optional[str] = None
    supportScale: Optional[str] = None
    policyOperationPeriod: Optional[str] = None
    ageInfo: Optional[str] = None
    major: Optional[str] = None
    employeedStatus: Optional[str] = None
    specialized: Optional[str] = None
    academicAbility: Optional[str] = None
    ResiIncomeCondition: Optional[str] = None
    additional: Optional[str] = None
    restriction: Optional[str] = None
    applicationProcedure: Optional[str] = None
    submissionDocuments: Optional[str] = None
    judge: Optional[str] = None
    applicationURL: Optional[str] = None
    referenceURL1: Optional[str] = None
    referenceURL2: Optional[str] = None
    department: Optional[str] = None


class Query(BaseModel):
    query: str
    filter: Optional[DocumentMetadataFilter] = None
    top_k: Optional[int] = 3


class QueryWithEmbedding(Query):
    embedding: List[float]


class QueryResult(BaseModel):
    query: str
    results: List[DocumentChunkWithScore]
