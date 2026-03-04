# การเริ่มต้นใช้งาน MongoDB

MongoDB เป็นฐานข้อมูลแบบ NoSQL ที่ได้รับความนิยมมาก เนื่องจากมีความยืดหยุ่นและสามารถรองรับข้อมูลที่ไม่มีโครงสร้างแน่นอน (Unstructured Data) ได้ดี โดยบทความนี้จะเน้นไปที่การใช้งานคำสั่งพื้นฐานที่จำเป็นต้องใช้ในโปรเจคจริง

## 1. ติดตั้ง MongoDB

ก่อนเริ่มต้นใช้งาน จำเป็นต้องติดตั้ง MongoDB บนเครื่องของคุณ สามารถดาวน์โหลดได้จากเว็บไซต์หลักของ MongoDB

- ดาวน์โหลดที่ [MongoDB Download Center](https://www.mongodb.com/try/download/community)
- ติดตั้งตามระบบปฏิบัติการของคุณ (Windows, macOS, Linux)
- ตรวจสอบว่าติดตั้งสำเร็จแล้วโดยรันคำสั่ง:
  ```sh
  mongod --version
  ```

## 2. เริ่มต้นใช้งาน MongoDB

เริ่มต้นรันเซิร์ฟเวอร์ของ MongoDB ด้วยคำสั่ง:

```sh
mongod
```

จากนั้นเปิดอีกหน้าต่างของ Terminal หรือ Command Prompt แล้วพิมพ์:

```sh
mongo
```

## 3. คำสั่งพื้นฐานของ MongoDB

### 3.1 สร้างและเลือกฐานข้อมูล

```sh
use mydatabase
```

หากยังไม่มีฐานข้อมูลนี้อยู่ MongoDB จะสร้างให้โดยอัตโนมัติเมื่อมีการบันทึกข้อมูลเข้าไป

### 3.2 สร้างและแสดงคอลเลกชัน (Collection)

```sh
// สร้างคอลเลกชันชื่อ users
db.createCollection("users")

// แสดงรายการคอลเลกชันทั้งหมดในฐานข้อมูล
show collections
```

### 3.3 แทรกข้อมูล (Insert Data)

```sh
// แทรกเอกสาร (Document) เดียว
db.users.insertOne({ name: "John Doe", age: 30, city: "New York" })

// แทรกหลายเอกสารพร้อมกัน
db.users.insertMany([
  { name: "Alice", age: 25, city: "London" },
  { name: "Bob", age: 28, city: "Paris" }
])
```

### 3.4 ค้นหาข้อมูล (Find Data)

```sh
// ค้นหาข้อมูลทั้งหมดในคอลเลกชัน
db.users.find()

// ค้นหาเอกสารที่ตรงกับเงื่อนไข
db.users.find({ city: "New York" })

// ค้นหาและแสดงผลแบบจัดรูปแบบให้อ่านง่าย
db.users.find().pretty()
```

### 3.5 อัปเดตข้อมูล (Update Data)

```sh
// อัปเดตเอกสารเดียว
db.users.updateOne(
  { name: "John Doe" },
  { $set: { age: 31 } }
)

// อัปเดตหลายเอกสารพร้อมกัน
db.users.updateMany(
  { city: "London" },
  { $set: { country: "UK" } }
)
```

### 3.6 ลบข้อมูล (Delete Data)

```sh
// ลบเอกสารเดียว
db.users.deleteOne({ name: "Alice" })

// ลบหลายเอกสาร
db.users.deleteMany({ city: "Paris" })
```

### 3.7 การสร้าง Index เพื่อเพิ่มประสิทธิภาพ

```sh
// สร้าง Index ที่ฟิลด์ name
db.users.createIndex({ name: 1 })
```

### 3.8 การนับจำนวนเอกสาร (Count Documents)

```sh
// นับจำนวนเอกสารทั้งหมด
db.users.countDocuments()

// นับจำนวนเอกสารที่ตรงกับเงื่อนไข
db.users.countDocuments({ city: "New York" })
```

### 3.9 การรวมข้อมูลด้วย Aggregation

```sh
// การใช้ Aggregation เพื่อหาค่าเฉลี่ยของอายุ
db.users.aggregate([
  { $group: { _id: null, averageAge: { $avg: "$age" } } }
])
```

## 4. MongoDB with nodejs

### 4.1 การเชื่อมต่อ MongoDB ด้วย Node.js

หากต้องการใช้งาน MongoDB ร่วมกับ Node.js ให้ติดตั้งไลบรารี `mongodb`:

```sh
npm install mongodb
```

ตัวอย่างโค้ดเชื่อมต่อ MongoDB ใน Node.js:

```javascript
const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db("mydatabase");
    const users = database.collection("users");
    
    // แทรกข้อมูล
    await users.insertOne({ name: "Eve", age: 22, city: "Berlin" });
    
    // ดึงข้อมูล
    const user = await users.findOne({ name: "Eve" });
    console.log(user);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
```



