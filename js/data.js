/* =========================================================
   DỮ LIỆU THỰC ĐƠN & JOURNAL - chỉ sửa file này để cập nhật nội dung.
   Mọi chuỗi trong [ngoặc vuông] là chỗ chờ nhà hàng cung cấp thông tin thật.
   "image": đường dẫn ảnh (vd "assets/images/menu/roast.jpg"); để "" thì hiện nền gradient.
   ========================================================= */
window.AN_THOI_DATA = {
  menu: {
    /* Món đặc trưng: ảnh, tên, mô tả ngắn, câu chuyện/điểm đặc biệt */
    signature: [
      { name: "[Tên món đặc trưng 1]", desc: "[Mô tả ngắn]", story: "[Câu chuyện hoặc điểm đặc biệt của món]", image: "" },
      { name: "[Tên món đặc trưng 2]", desc: "[Mô tả ngắn]", story: "[Câu chuyện hoặc điểm đặc biệt của món]", image: "" }
    ],
    /* Danh mục món ăn: sửa tên nhóm cho khớp thực đơn thực tế */
    categories: [
      { name: "Món khai vị", items: [
        { name: "[Tên món]", desc: "[Mô tả ngắn]", price: "[Giá]", image: "" },
        { name: "[Tên món]", desc: "[Mô tả ngắn]", price: "[Giá]", image: "" },
        { name: "[Tên món]", desc: "[Mô tả ngắn]", price: "[Giá]", image: "" } ] },
      { name: "Món chính", items: [
        { name: "[Tên món]", desc: "[Mô tả ngắn]", price: "[Giá]", image: "" },
        { name: "[Tên món]", desc: "[Mô tả ngắn]", price: "[Giá]", image: "" },
        { name: "[Tên món]", desc: "[Mô tả ngắn]", price: "[Giá]", image: "" } ] },
      { name: "Món ăn kèm", items: [
        { name: "[Tên món]", desc: "[Mô tả ngắn]", price: "[Giá]", image: "" },
        { name: "[Tên món]", desc: "[Mô tả ngắn]", price: "[Giá]", image: "" },
        { name: "[Tên món]", desc: "[Mô tả ngắn]", price: "[Giá]", image: "" } ] }
    ],
    drinks: [
      { name: "[Tên đồ uống]", desc: "[Mô tả ngắn]", price: "[Giá]", image: "" },
      { name: "[Tên đồ uống]", desc: "[Mô tả ngắn]", price: "[Giá]", image: "" },
      { name: "[Tên đồ uống]", desc: "[Mô tả ngắn]", price: "[Giá]", image: "" }
    ],
    combos: [
      { name: "[Tên combo / set menu]", desc: "[Gồm những món nào, phù hợp mấy người]", price: "[Giá]", image: "" },
      { name: "[Tên combo / set menu]", desc: "[Gồm những món nào, phù hợp mấy người]", price: "[Giá]", image: "" }
    ]
  },
  journal: {
    /* Chủ đề theo STEP 2 */
    categories: ["Ẩm thực", "Nguyên liệu", "Con người", "Đà Nẵng", "Trải nghiệm", "Tin tức"],
    /* featured: true -> hiện làm bài nổi bật ở đầu trang. body: danh sách đoạn văn của trang chi tiết */
    posts: [
      { id: "1", featured: true, category: "Ẩm thực", title: "[Tiêu đề bài viết nổi bật]", date: "[Ngày đăng]", excerpt: "[Mô tả ngắn của bài viết]", image: "", body: ["[Nội dung bài viết]"] },
      { id: "2", category: "Nguyên liệu", title: "[Tiêu đề bài viết]", date: "[Ngày đăng]", excerpt: "[Mô tả ngắn]", image: "", body: ["[Nội dung bài viết]"] },
      { id: "3", category: "Con người", title: "[Tiêu đề bài viết]", date: "[Ngày đăng]", excerpt: "[Mô tả ngắn]", image: "", body: ["[Nội dung bài viết]"] },
      { id: "4", category: "Đà Nẵng", title: "[Tiêu đề bài viết]", date: "[Ngày đăng]", excerpt: "[Mô tả ngắn]", image: "", body: ["[Nội dung bài viết]"] },
      { id: "5", category: "Trải nghiệm", title: "[Tiêu đề bài viết]", date: "[Ngày đăng]", excerpt: "[Mô tả ngắn]", image: "", body: ["[Nội dung bài viết]"] },
      { id: "6", category: "Tin tức", title: "[Tiêu đề bài viết]", date: "[Ngày đăng]", excerpt: "[Mô tả ngắn]", image: "", body: ["[Nội dung bài viết]"] }
    ]
  }
};