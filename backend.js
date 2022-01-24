const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(req, res) {
  res.send('Hello Shooping mall!')
});
//return three layers list
app.get('/product/getBaseCategoryList',function(req,res){
  res.send({
    code:200,
    message:'success',
    data:[
      {
      categoryChild: [
      {
        categoryChild:[
      {
        categoryName: "book-item",
        categoryId: 1
      },
      {
        categoryName: "book-item2",
        categoryId: 2
                     },
      {
        categoryName: "book-item3",
        categoryId: 3
      }],
        categoryName: "e-book",
        categoryId: 1
      },
      {
        categoryChild:[
      {
        categoryName: "book-item",
        categoryId: 1
      },
      {
        categoryName: "book-item2",
        categoryId: 2
                     },
      {
        categoryName: "book-item3",
        categoryId: 3
      }],
        categoryName: "novel",
        categoryId: 2
      },
      {
        categoryChild:[
      {
        categoryName: "book-item",
        categoryId: 1
      },
      {
        categoryName: "book-item2",
        categoryId: 2
                     },
      {
        categoryName: "book-item3",
        categoryId: 3
      }],
        categoryName: "fiction",
        categoryId: 3
      }],
      categoryName: "book",
      categoryId: 1,
      },
      {
        categoryChild: [
        {
          categoryChild:[
        {
          categoryName: "keyboard-item",
          categoryId: 1
        },
        {
          categoryName: "keyboard-item2",
          categoryId: 2
                       },
        {
          categoryName: "keyboard-item3",
          categoryId: 3
        }],
          categoryName: "green keyboard",
          categoryId: 1
        },
        {
          categoryChild:[
        {
          categoryName: "keyboard-item",
          categoryId: 1
        },
        {
          categoryName: "keyboard-item2",
          categoryId: 2
                       },
        {
          categoryName: "keyboard-item3",
          categoryId: 3
        }],
          categoryName: "red keyboard",
          categoryId: 2
        },
        {
          categoryChild:[
        {
          categoryName: "keyboard-item",
          categoryId: 1
        },
        {
          categoryName: "keyboard-item2",
          categoryId: 2
                       },
        {
          categoryName: "keyboard-item3",
          categoryId: 3
        }],
          categoryName: "yellow keyboard",
          categoryId: 3
        }],
        categoryName: "keyboard",
        categoryId: 2,
        }
    ]
  });
})
app.post('/list',function(req,res){
  //return search data
  res.send({
    "code": 200,
    "message": "success",
    "data": {
        "trademarkList": [
            {
                "tmId": 1,
                "tmName": "Apple"
            },
            
        ],
        "attrsList": [
            {
                "attrId": 1,
                "attrValueList": [
                    "450-1000",
                    "1000-2000"
                ],
                "attrName": "price"
            },
            
        ],
        "goodsList": [
            {
                "id": 1,
                "defaultImg": "mobile04.jpg",
                "title": "Apple iPhone",
                "price": 1400,
                "createTime": null,
                "tmId": null,
                "tmName": null,
                "category1Id": null,
                "category1Name": null,
                "category2Id": null,
                "category2Name": null,
                "category3Id": null,
                "category3Name": null,
                "hotScore": 0,
                "attrs": null
            },
            
        ],
        "total": 1,
        "pageSize": 1,
        "pageNo": 1,
        "totalPages": 1
    },
    "ok": true
}
);
})
app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`)
});