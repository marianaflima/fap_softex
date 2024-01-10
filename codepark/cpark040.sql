# Criacao da tabela
CREATE DATABASE Estoque;
USE Estoque;
CREATE TABLE Produtos (
	ProdutoID INT NOT NULL PRIMARY KEY,
  NomeProduto VARCHAR(50),
  Preço DOUBLE,
  QntdEstoque INT
);

# Insercao de produtos usando INSERT INTO
INSERT INTO Produtos VALUES
	(101, "Smartphones", 799.99, 20),
  (102, "Tablet", 349.99, 10),
  (103, "Fone de ouvido", 49.99, 50);

# Mudanca de preco do smartphone
UPDATE Produtos
SET Preço=849.99, QntdEstoque=25
WHERE ProdutoID=101;
 
# Mudanca de estoque nos produtos. Nao é necessario usar DELETE aqui.
UPDATE Produtos
SET QntdEstoque=QntdEstoque-5
WHERE ProdutoID=102;

UPDATE Produtos
SET QntdEstoque=QntdEstoque-10
WHERE ProdutoID=103;
