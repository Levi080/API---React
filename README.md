# CRUD-React
API criada em React integrada com o MongoDB (Configurado para o Atlas).
Nela é possivel realizar operações CRUD na sua base.

 ###### **CONFIGURAÇÕES** 

- Instale Node JS
- Instale Visual Studio Code
- Instale Postman 

 ###### **Bibliotecas usadas**

> - express -> npm install express | Auxilia na configuração de criação do servidor. 
> - cookieParser -> npm install cookie-parser | Auxilia na comunicação com o servidor, criação de rotas e etc.
> - mongoose -> npm install mongoose | Auxilia na integração com o mongodb
> - nodemon -> npm install nodemon | Auxilia no desenvolvimento de app react, reiniciando automaticamente no servidor a cada alteração no código fonte.
> - cors -> npm install cors | Necessário para permitir o controle de acesso de solicitações HTTP.


###### **Métodos da Controller**

Dentro da API existe no momento apenas uma controller, a ProductController. Nela temos os métodos 
1. **CreateProduct** -> Realiza o cadastro do produto no banco de dados.
2. **GetAllProducts** -> Retorna todos os dados do banco de dados.
3. **GetProduct** -> Retorna um dado espeficico usando algum indentificador.
4. **UpdateProduct** -> Atualiza um dado que já está cadastrado no banco de dados.
5. **RemoveProduct** -> Realiza uma remoção de um produto específico que foi cadastrado no banco de dados.


###### **Requisição**

Abaixo estão os modelos de requisição para cada método que devem ser seguidos.

- **CreateProduct**
 
```json
{
"title": "Produto5",
"description": "Quinto produto criado via api."
}
```
**URL:** http://localhost:3003/products

![image](https://user-images.githubusercontent.com/82042435/231918984-ad9e322b-d567-4d47-b4bf-f61f024fe117.png)


- **GetAllProducts** 

 Não é necessário enviar um body na requisição.

**URL:** http://localhost:3003/products

![image](https://user-images.githubusercontent.com/82042435/231919319-cfe838be-fe77-41c1-ba03-ccd557db8c5c.png)


- **GetProduct** 
 Não é necessário enviar um body na requisição.
 
 **URL:** http://localhost:3003/products/iddoproduto
 
 ![image](https://user-images.githubusercontent.com/82042435/231919512-c3ce2751-294e-40db-ad9b-af5e25835af7.png)


- **UpdateProduct** 

```json
{
  "title": "ProdutoAtualizado",
  "description": "Produto atualizado via api."
}
```

**URL:** http://localhost:3003/products/iddoproduto

![image](https://user-images.githubusercontent.com/82042435/231919954-3e465a96-cb01-4f7e-ad3a-6ed394df8f44.png)


- **RemoveProduct** 
 Não é necessário enviar um body na requisição.

 **URL:** http://localhost:3003/products/iddoproduto
 
 ![image](https://user-images.githubusercontent.com/82042435/231920128-16a039fe-3d26-4a67-a80e-6a8287b7db6f.png)
