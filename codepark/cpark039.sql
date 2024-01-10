# Tabela Autor
CREATE TABLE Autor(
	AutorID int primary key,
  Nome varchar(45),
  Email varchar(100)
);

# Tabela Post
CREATE TABLE Post(
  PostID INT PRIMARY KEY,
  Titulo VARCHAR(30),
  Conteudo TEXT,
  DataPub DATETIME,
  AutorID INT NOT NULL,
  FOREIGN KEY (AutorID) REFERENCES Autor(AutorID) ON DELETE CASCADE ON UPDATE CASCADE
);

# Tabela Comentarios
CREATE TABLE Comentarios (
	ComentarioID INT PRIMARY KEY,
  TextoComentario TEXT,
  DataComentario DATETIME ON UPDATE CURRENT_timestamp,
  AutorID INT,
  PostID INT,
  FOREIGN KEY (AutorID) REFERENCES Autor(AutorID) ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY (PostID) REFERENCES Post(POstID) ON UPDATE CASCADE ON DELETE CASCADE
);












