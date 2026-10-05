let rooms = [
  {
    roomId: "P101",
    roomType: "Deluxe",
    pricePerNight: 1500000,
    status: "VACANT",
  },
  {
    roomId: "P102",
    roomType: "Standard",
    pricePerNight: 1000000,
    status: "OCCUPIED",
  },
  {
    roomId: "P103",
    roomType: "Superior",
    pricePerNight: 1200000,
    status: "VACANT",
  },
];

// Hàm hiển thị danh sách phòng
function displayRooms() {
  console.log("\n--- DANH SÁCH PHÒNG ---");
  console.log("Mã phòng | Loại phòng | Giá/đêm | Trạng thái");

  for (let i = 0; i < rooms.length; i++) {
    console.log(
      rooms[i].roomId +
        " | " +
        rooms[i].roomType +
        " | " +
        rooms[i].pricePerNight +
        " VNĐ | " +
        rooms[i].status,
    );
  }
}

// Hiển thị danh sách ban đầu
displayRooms();

// CREATE: Thêm phòng P104
const newRoom = {
  roomId: "P104",
  roomType: "VIP Suite",
  pricePerNight: 3500000,
  status: "VACANT",
};

rooms.push(newRoom);

console.log("\n--- SAU KHI THÊM P104 ---");
displayRooms();

// UPDATE: Cập nhật trạng thái phòng P101
for (let i = 0; i < rooms.length; i++) {
  if (rooms[i].roomId === "P101") {
    rooms[i].status = "OCCUPIED";
  }
}

console.log("\n--- SAU KHI CẬP NHẬT P101 ---");
displayRooms();

// DELETE: Xóa phòng P103
for (let i = 0; i < rooms.length; i++) {
  if (rooms[i].roomId === "P103") {
    rooms.splice(i, 1);
    break;
  }
}

console.log("\n--- SAU KHI XÓA P103 ---");
displayRooms();
