# คำสั่ง MySQL พร้อมตัวอย่างการใช้งาน

ตารางแสดงคำสั่ง MySQL พื้นฐานที่ใช้บ่อยๆ

| คำสั่ง             | คำอธิบาย                              | ตัวอย่างการใช้งาน                              | ผลลัพธ์ที่คาดหวัง (สมมติ)             |
|-------------------|--------------------------------------|----------------------------------------------|---------------------------------------|
| `SELECT`          | เลือกข้อมูลจากตาราง                   | `SELECT name, age FROM users WHERE age > 18;` | แสดงชื่อและอายุของผู้ใช้ที่อายุมากกว่า 18 |
| `INSERT INTO`     | เพิ่มข้อมูลใหม่ลงในตาราง              | `INSERT INTO users (name, age) VALUES ('John', 25);` | เพิ่มผู้ใช้ชื่อ John อายุ 25 ปี       |
| `UPDATE`          | อัปเดตข้อมูลในตาราง                   | `UPDATE users SET age = 26 WHERE name = 'John';` | เปลี่ยนอายุของ John เป็น 26           |
| `DELETE`          | ลบข้อมูลจากตาราง                      | `DELETE FROM users WHERE age < 18;`          | ลบผู้ใช้ที่อายุน้อยกว่า 18            |
| `CREATE TABLE`    | สร้างตารางใหม่                       | `CREATE TABLE users (id INT, name VARCHAR(50), age INT);` | สร้างตาราง users พร้อม 3 คอลัมน์     |
| `DROP TABLE`      | ลบตาราง                              | `DROP TABLE users;`                          | ลบตาราง users ออกทั้งหมด             |
| `ALTER TABLE`     | แก้ไขโครงสร้างตาราง                   | `ALTER TABLE users ADD email VARCHAR(100);`  | เพิ่มคอลัมน์ email ในตาราง users     |
| `JOIN`            | รวมข้อมูลจากหลายตาราง                 | `SELECT u.name, o.order_id FROM users u JOIN orders o ON u.id = o.user_id;` | แสดงชื่อผู้ใช้และรหัสคำสั่งซื้อ       |
| `GROUP BY`        | จัดกลุ่มข้อมูล                        | `SELECT age, COUNT(*) FROM users GROUP BY age;` | นับจำนวนผู้ใช้ตามอายุ                |
| `ORDER BY`        | เรียงลำดับข้อมูล                     | `SELECT name, age FROM users ORDER BY age DESC;` | แสดงชื่อและอายุเรียงจากมากไปน้อย     |

