<h1 align=center>Dev-Bills API-rest</h1>

![Wanndeko-repo-status](https://img.shields.io/badge/Status-Finished-lightgrey?style=for-the-badge&logo=headspace&logoColor=green&color=lightgrey)
![Wanndeko-repo-license](https://img.shields.io/github/license/Luk4x/iManager-json-server?style=for-the-badge&logo=unlicense&logoColor=lightgrey)

<h2>Tecnologias🖥️</h2>
<ul>
  <li><a href=https://www.npmjs.com/package/express>Express</a></li>
  <li><a href=https://www.typescriptlang.org/docs/>TypeScript</a></li>
  <li><a href=https://www.mongodb.com/docs/>MongoDB</a></li>
  <li><a href=https://mongoosejs.com/docs/>Mongoose</a></li>
  <li><a href=https://docs.docker.com/>Docker</a></li>
</ul>

<h2>Descrição📃</h2>
<p>Este projeto consiste em uma API-rest feita em Typescript, que em conjunto com o o front se torna um software de gestão financeira.
Dev-Bills entrega o controle de suas finanças durante o ano, podendo executar filtragens por periodo ou  titulos.</p>

<h2>utilização🛠️</h2>

get => "/" retorna um json do packageJson com status 200 e informações sobre autor e etc.
```javascript
Ex:
{
 "name": "devbills",
 "version": "1.0.0",
 "description": "api da aplicação devbills",
 "author": {
  "name": "Wanderley Campos",
  "email": "camposwanderley418@gmail.com",
  "url":"https://github.com/Wanndeko"
  }
} 
```

get => "/categories" rota que lista todas as categorias. Retorna um json com  _id, title, color. ex:
```javascript
{
 "_id": "66212363529bed0c31ecad16",
 "title": "Carro",
 "color": "#0B321B"
},
```

post => "/categories" recebe dois bodyparams
```javascript
 title, color. o parametro color possuo uma verificação para que só seja aceito no formato hexadecimal.
 retorna o codigo 201 junto das informações criadas e um id unico feito pelo banco dados mongoDB.
Ex de informaçõoes recebidas:
{
 "title": "Lucro-mensal",
 "color": "#33ffbb"
}

retorno:
{
 "title": "Lucro-mensal",
 "color": "#33FFBB",
 "_id": "65d8cac5cc659b1dff2cbce6"
}
```

post => "/transactions" recebe 5 informações
bodyparams. retorna status code 201 com um id que é o id da categoria selecionada ao criar a transação.
o dado type só aceita dois valores, income ou exepense.
```javascript

{
 "title": "lucro-fev",
 "amount": 1000000,
 "type": "income",
 "date": "2024/02/30",
 "categoryId": "65d8cac5cc659b1dff2cbce6"
}
```

get => "/transactions" retorna todas as transações, aceita queryparams. Datas de inicio e fim para um filtro de periodo.]
Ex sem filtro:
```javascript
[
  {
    "_id": "6632678ebfad31bbf176b674",
    "title": "fogão",
    "amount": 105000,
    "type": "expense",
    "date": "5202-01-06T00:00:00.000Z",
    "category": {
                  "title": "Apartamento",
                  "color": "#2B207E",
                  "_id": "6621245a529bed0c31ecad24"
     }
 },
 {
   "_id": "6626d0ec8187035c482c1201",
   "title": "Body Kit",
   "amount": 5000000,
   "type": "expense",
   "date": "2024-11-10T00:00:00.000Z",
   "category": {
                 "title": "Carro",
                 "color": "#0B321B",
                 "_id": "66212363529bed0c31ecad16"
    }
 },
 {
   "_id": "662bd245013110d438af25e7",
   "title": "ads",
   "amount": 50000,
   "type": "income",
   "date": "2024-06-08T00:00:00.000Z",
   "category": {
                 "title": "lucro do app ",
                 "color": "#000000",
                 "_id": "662bd22b013110d438af25e3"
    }
 },
 {
   "_id": "66324d11bfad31bbf176b5f2",
   "title": "teclado",
   "amount": 46000,
   "type": "expense",
   "date": "2024-05-10T00:00:00.000Z",
   "category": {
                 "title": "Pc",
                 "color": "#00ED64",
                 "_id": "66311f8499719e569ad5dbe4"
   }
 },
 {
   "_id": "663267f5bfad31bbf176b693",
   "title": "fogão",
   "amount": 105000,
   "type": "expense",
   "date": "2024-05-06T00:00:00.000Z",
   "category": {
                 "title": "Apartamento",
                 "color": "#2B207E",
                 "_id": "6621245a529bed0c31ecad24"
   }
 },
 {
   "_id": "662bd1c3013110d438af25de",
   "title": "Placa de video",
   "amount": 400000,
   "type": "expense",
   "date": "2024-05-05T00:00:00.000Z",
   "category": {
                 "title": "Computador",
                 "color": "#00118F",
                 "_id": "662bd1a0013110d438af25da"
   }
 },
 {
   "_id": "66324179bfad31bbf176b5d6",
   "title": "dindin do mes",
   "amount": 5000000,
   "type": "income",
   "date": "2024-05-01T00:00:00.000Z",
   "category": {
                 "title": "GraninhaBoa",
                 "color": "#0B46BC",
                 "_id": "663136db99719e569ad5dcd7"
   }
 },
 {
   "_id": "66311fa299719e569ad5dbe8",
   "title": "monitor 244hz",
   "amount": 200000,
   "type": "expense",
   "date": "2024-04-25T00:00:00.000Z",
   "category": {
                 "title": "Pc",
                 "color": "#00ED64",
                 "_id": "66311f8499719e569ad5dbe4"
   }
 },
 {
   "_id": "6631397f99719e569ad5dcec",
   "title": "Sofasão",
   "amount": 90000,
   "type": "expense",
   "date": "2024-04-20T00:00:00.000Z",
   "category": {
                 "title": "Apartamento",
                 "color": "#2B207E",
                 "_id": "6621245a529bed0c31ecad24"
   }
 },
 {
   "_id": "662fcd4a96c60a203a5e1583",
   "title": "nitro",
   "amount": 500000,
   "type": "expense",
   "date": "2024-04-08T00:00:00.000Z",
   "category": {
                 "title": "Carro",
                 "color": "#0B321B",
                 "_id": "66212363529bed0c31ecad16"
   }
}
]
```

Ex: com filtro beginDate, endDate:.

```javascript

 {
   "_id": "66324d11bfad31bbf176b5f2",
   "title": "teclado",
   "amount": 46000,
   "type": "expense",
   "date": "2024-05-10T00:00:00.000Z",
   "category": {
		 "title": "Pc",
		 "color": "#00ED64",
		 "_id": "66311f8499719e569ad5dbe4"
   }
 },
 {
   "_id": "663267f5bfad31bbf176b693",
   "title": "fogão",
   "amount": 105000,
   "type": "expense",
   "date": "2024-05-06T00:00:00.000Z",
   "category": {
		 "title": "Apartamento",
		 "color": "#2B207E",
		 "_id": "6621245a529bed0c31ecad24"
   }
 }
```

get => "/transactions/dashboard" retorna im json com o balanço entre expenses e incomes
tabem traz um array de expenses com com as categorias e montantes. pode tabém receber datas para filtrar as categorias por periodo 
Ex:
```javascript
 {
   "balance": {
                "_id": null,
		"incomes": 17050000,
		"expenses": 6446000,
		"balance": 10604000
   },
  "expenses": [
                {
                  "_id": "66311f8499719e569ad5dbe4",
                  "title": "Pc",
                  "color": "#00ED64",
                  "amount": 246000
		},
		{
                  "_id": "6621245a529bed0c31ecad24",
	          "title": "Apartamento",
		  "color": "#2B207E",
		  "amount": 300000
		},
		{
		  "_id": "662bd1a0013110d438af25da",
		  "title": "Computador",
		  "color": "#00118F",
		  "amount": 400000
		},
		{
		  "_id": "66212363529bed0c31ecad16",
		  "title": "Carro",
		  "color": "#0B321B",
		  "amount": 5500000
		}
	]
}
```

get => "/transactions/financial-evolution"
recebe como parametro ano, traz um json com as informações de balanço sobre gastos e receitas durante o ano enviado.
Ex:
```javascript
 [
   {
     "_id": [ 2024, 2 ],
            "incomes": 5000000,
	    "expenses": 0,
	    "balance": 5000000
   },
   {
     "_id": [ 2024, 4 ],
	    "incomes": 7000000,
            "expenses": 790000,
            "balance": 6210000
   },
   {
     "_id": [ 2024, 5 ],
	    "incomes": 5000000,
	    "expenses": 551000,
	    "balance": 4449000
   },
   {
     "_id": [ 2024, 6 ],
 	    "incomes": 50000,
	    "expenses": 0,
	    "balance": 50000
   },
   {
     "_id": [ 2024, 11 ],
	    "incomes": 0,
	    "expenses": 5000000,
	    "balance": -5000000
   }
]
```

<h2>Executando na Maquina</h2>

<p>Para executar este projeto basta abrir o terminal e digitar git clone copiar e colar o link (https://github.com/Wanndeko/DevBills-api.git) e teclar enter.
 Com o projeto aberto, no terminal do editor de codigo, digite npm install para instalar as dependencias,
  com tudo pronto digite npm run dev e se tudo ocorrer bem ira aparecer a  mensagem 🚀 app is running at port 3333 </p>








