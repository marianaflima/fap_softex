# Criar base de dados e seleciona-la
CREATE DATABASE Inventario;
USE Inventario;

# Criando tabela "autores" de acordo com as requisicoes da questao
CREATE TABLE Autores(
	AutorID INT PRIMARY KEY AUTO_INCREMENT,
  Nome VARCHAR(100),
  Nacionalidade VARCHAR(50)
);

/* Criando tabela "livros" de acordo com as requisicoes da questao e 
	associando as tabelas usando chave estrangeira
*/
CREATE TABLE Livros(
	LivroID INT PRIMARY KEY AUTO_INCREMENT,
  Titulo VARCHAR(50),
  AnoPub INT(4),
  AutorID INT,
  FOREIGN KEY (AutorID) REFERENCES Autores(AutorID) ON UPDATE CASCADE ON DELETE CASCADE
);

# Aqui inseri alguns autores do meu gosto para usar nas consultas
INSERT INTO Autores (Nome, Nacionalidade)
VALUES
("Clarice Lispector", "Brasileiro(a)"),
("Agatha Christie", "Ingles(a)"),
("Liev Tolstoi", "Russo(a)");

# Aqui coloquei cinco livros de cada para manipular posteriormente
INSERT INTO Livros (Titulo, AnoPub, AutorID)
VALUES
("A Hora da Estrela", 1977, 1),
("Lacos de Familia", 1960, 1),
("A Paixao segundo G.H>.", 1964, 1),
("Perto do Coracao Selvagem", 1943, 1),
("Felicidade Clandestina", 1971, 1),
("Assassinato no Expresso Oriente", 1934, 2),
("Morte no Nilo", 1937, 2),
("Cai o pano", 1975,2),
("Os crimes ABC", 1935,2),
("A casa torta", 1949,2),
("Guerra e Paz", 1868, 3),
("A morte de Ivan Illitch", 1886, 3),
("Felicidade Conjugal", 1859,3),
("Anna Karenina", 1877,3),
("O Diabo", 1889,3);

# Primeira query usando JOIN para listar autores e livros associados
SELECT Autores.Nome AS Autor, Livros.Titulo
FROM Autores
JOIN Livros ON Autores.AutorID = Livros.AutorID;
# Esperado que se listem os autores e ao lado, os titulos dos livros

# Segunda query usando INNER JOIN para listar livros, detalhes e autores correspondentes
SELECT Livros.Titulo AS Livro, Livros.AnoPub, Autores.Nome AS Autor
FROM Livros
INNER JOIN Autores ON Livros.AutorID = Autores.AutorID;
# Espera-se que se mostre o titulo do livro, o ano de publicacao e o autor do livros

# Terceira query usando LEFT JOIN para exibir todos os autores, mesmo se nao tiverem livros
SELECT Autores.AutorID AS AutorID, Autores.Nome AS Autor, Livros.Titulo AS Livro, Livros.AnoPub
FROM Autores
LEFT JOIN Livros ON Autores.AutorID = Livros.AutorID;
# Espera-se que se mostre o ID dos autores, seus nomes, seus livros e o ano que foram publicados

# Quarta query usando filtro por nacionalidade
SELECT Autores.Nome AS Nome, Autores.Nacionalidade As Nacionalidade FROM autores
WHERE Autores.Nacionalidade="Brasileiro(a)";
# Nessa parte espera-se que retorne-se Clarice Lispector e sua nacionalidade, brasileira

# Quinta query que conta os o numero de livros escritos que foram adicionados na tabela por autores diferentes
SELECT Autores.AutorID AS AutorID, Autores.Nome AS Autor, COUNT(Livros.LivroID) AS Livros_Escritos
FROM Autores
LEFT JOIN livros ON Autores.AutorID=Livros.AutorID
GROUP BY Autores.AutorID, Autores.Nome;
# Espera-se que apareca o nome de cada autor e o numero 5 na coluna de livros escritos

/* As juncoes sao importantes para que se possa analisar dados para montar
uma informacao e retorna-los a quem os requeriu */ 
