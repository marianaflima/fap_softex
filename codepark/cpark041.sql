USE TransacoesTechData;

CREATE TEMPORARY TABLE IF NOT EXISTS TransacoesTemp(
	id INT AUTO_INCREMENT PRIMARY KEY,
  DataTransacao DATE,
  Valor DECIMAL(10,2),
  Produto VARCHAR(255)
);

INSERT INTO TransacoesTemp(DataTransacao, Valor, Produto)
SELECT
	DATE_ADD(CURDATE(), INTERVAL -FLOOR(RAND() * 365) DAY) AS DataTransacao,
  ROUND(RAND() * 5000 + 500, 2) AS Valor,
  CASE
  	WHEN RAND() < 0.3 THEN 'Laptop'
    WHEN RAND() < 0.6 THEN 'Smartphone'
    ELSE 'Acessorio'
  END AS Produto
FROM INFORMATION_SCHEMA.TABLES LIMIT 100;

# Todos os dados da tabela de transações 
SELECT * FROM TransacoesTemp;

# Renomeando as colunas
SELECT id AS ID_Transacao, DataTransacao AS Data, Valor AS Valor 
FROM TransacoesTemp;

# Usando WHERE para filtrar transacoes acima de 100.00
SELECT * FROM TransacoesTemp
WHERE Valor > 100;

# Usando WHERE para filtrar transacoes acima de 100.00
SELECT * FROM TransacoesTemp
ORDER BY Valor DESC;

# Calculando a media das transacoes feitas usando AVG()
SELECT ROUND(AVG(Valor), 2) AS "Valor medio - Transacoes"
FROM TransacoesTemp;

# Consultando a maior transação feita usando MAX()
SELECT MAX(Valor) AS "Maior Transacao"
FROM TransacoesTemp;

# Consultando a menor transação feita usando MIN()
SELECT MIN(Valor) AS "Menor Transacao"
FROM TransacoesTemp;

# Contando o total de transações usando COUNT()
SELECT COUNT(id) AS "Total de transacoes"
FROM TransacoesTemp;

# Consultando a média por produto usando GROUP BY
SELECT Produto, ROUND(AVG(Valor),2) AS "Valor medio"
FROM TransacoesTemp
GROUP BY Produto;

/* 
Consultando a quantidade total de produtos vendidos usando COUNT, 
junto com o valor total das vendas usando SUM e a media de valor por
transação, todos agrupados por categoria de produto
*/
SELECT Produto, ROUND(AVG(Valor),2) AS "Valor medio", 
COUNT(id) AS "Vendas por produto", 
SUM(Valor) AS "Soma total de vendas por produto"
FROM TransacoesTemp
GROUP BY Produto;