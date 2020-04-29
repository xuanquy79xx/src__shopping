import * as Image from './images/index';
const dataProducts = [
    [{ id: 0, imageThumbnail: Image.aoT, image: Image.ao, name: "Áo Khoác", price: 50, rate: 4, votes: 129 },
    { id: 1, imageThumbnail: Image.ao1T, image: Image.ao1, name: "Áo Khoác Thể Thao", price: 20, rate: 2, votes: 1239 },
    { id: 2, imageThumbnail: Image.ao2T, image: Image.ao2, name: "Áo Sơ Mi ", price: 49, rate: 3, votes: 532 },
    { id: 3, imageThumbnail: Image.ao3T, image: Image.ao3, name: "Áo Khoác da", price: 99, rate: 4, votes: 49 },
    { id: 4, imageThumbnail: Image.ao4T, image: Image.ao4, name: "Áo Sơ Mi", price: 150, rate: 2, votes: 99 },
    { id: 5, imageThumbnail: Image.ao5T, image: Image.ao5, name: "Áo Sơ Mi Cổ Ngắn", price: 50, rate: 5, votes: 134 },
    { id: 6, imageThumbnail: Image.ao6T, image: Image.ao6, name: "Áo Sơ Mi", price: 30, rate: 1, votes: 4613 },
    { id: 7, imageThumbnail: Image.ao7T, image: Image.ao7, name: "Áo Sơ Mi", price: 70, rate: 2, votes: 346 },
    { id: 8, imageThumbnail: Image.ao8T, image: Image.ao8, name: "Áo Khoác Trẻ Trung", price: 50, rate: 4, votes: 39 },
    { id: 9, imageThumbnail: Image.ao9T, image: Image.ao9, name: "Áo Legend", price: 60, rate: 3, votes: 29 },
    { id: 10, imageThumbnail: Image.ao10T, image: Image.ao10, name: "Áo Tập Gym", price: 150, rate: 4, votes: 45 },
    { id: 11, imageThumbnail: Image.ao11T, image: Image.ao11, name: "Áo Sơ Mi Cá Tính", price: 250, rate: 5, votes: 44 },
    { id: 12, imageThumbnail: Image.ao12T, image: Image.ao12, name: "Áo Sơ Mi sọc xanh", price: 450, rate: 4, votes: 56 },
    { id: 13, imageThumbnail: Image.ao13T, image: Image.ao13, name: "Áo Khoác", price: 520, rate: 5, votes: 2329 },
    { id: 14, imageThumbnail: Image.ao14T, image: Image.ao14, name: "Áo Khoác", price: 510, rate: 5, votes: 435 },
    { id: 15, imageThumbnail: Image.ao15T, image: Image.ao15, name: "Áo Khoác", price: 250, rate: 1, votes: 23 },
    { id: 16, imageThumbnail: Image.ao16T, image: Image.ao16, name: "Áo Jean", price: 350, rate: 3, votes: 434 }],
    [{ id: 17, imageThumbnail: Image.quanT, image: Image.quan, name: "Quần Joker", price: 80, rate: 3, votes: 129 },
    { id: 18, imageThumbnail: Image.quan1T, image: Image.quan1, name: "Quần Thể Thao", price: 80, rate: 3, votes: 19 },
    { id: 19, imageThumbnail: Image.quan2T, image: Image.quan2, name: "Quần Jean đẹp", price: 380, rate: 3, votes: 239 },
    { id: 20, imageThumbnail: Image.quan3T, image: Image.quan3, name: "Quần Au", price: 80, rate: 3, votes: 43 },
    { id: 21, imageThumbnail: Image.quan4T, image: Image.quan4, name: "Quần Joker Army", price: 180, rate: 3, votes: 45 },
    { id: 22, imageThumbnail: Image.quan5T, image: Image.quan5, name: "Quần Short", price: 30, rate: 5, votes: 66 },
    { id: 23, imageThumbnail: Image.quan6T, image: Image.quan6, name: "Quần Tây", price: 150, rate: 1, votes: 76 },
    { id: 24, imageThumbnail: Image.quan7T, image: Image.quan7, name: "Quần Âu", price: 260, rate: 3, votes: 87 },
    { id: 25, imageThumbnail: Image.quan8T, image: Image.quan8, name: "Quần Thể Thao", price: 450, rate: 2, votes: 79 },
    { id: 26, imageThumbnail: Image.quan9T, image: Image.quan9, name: "Quần Short", price: 810, rate: 2, votes: 785 },
    { id: 27, imageThumbnail: Image.quan10, image: Image.quan10, name: "Quần Âu", price: 220, rate: 3, votes: 123 },
    { id: 28, imageThumbnail: Image.quan11, image: Image.quan11, name: "Quần Jean", price: 320, rate: 4, votes: 231 },
    { id: 29, imageThumbnail: Image.quan12, image: Image.quan12, name: "Quần Jean", price: 50, rate: 5, votes: 12343 }],
    [{ id: 30, imageThumbnail: Image.giay1T, image: Image.giay1, name: "Giày Bitis's Hunter", price: 30, rate: 5, votes: 45 },
    { id: 31, imageThumbnail: Image.giay2T, image: Image.giay2, name: "Giày Bitis Core", price: 60, rate: 5, votes: 96549 },
    { id: 32, imageThumbnail: Image.giay3T, image: Image.giay3, name: "Giày Thể Thao", price: 130, rate: 2, votes: 56 },
    { id: 33, imageThumbnail: Image.giay4T, image: Image.giay4, name: "Giày Superme", price: 230, rate: 5, votes: 9239 },
    { id: 34, imageThumbnail: Image.giay5T, image: Image.giay5, name: "Giày Ultra Boots", price: 210, rate: 4, votes: 12 },
    { id: 35, imageThumbnail: Image.giay6T, image: Image.giay6, name: "Giày Adidas", price: 220, rate: 4, votes: 23 },
    { id: 36, imageThumbnail: Image.giay7T, image: Image.giay7, name: "Giày Yezzy", price: 320, rate: 3, votes: 5 },
    { id: 37, imageThumbnail: Image.giay8T, image: Image.giay8, name: "Giày Van old School", price: 340, rate: 5, votes: 2 },
    { id: 38, imageThumbnail: Image.giay9T, image: Image.giay9, name: "Giày Thể Thao", price: 540, rate: 4, votes: 12 }],
    [{ id: 39, imageThumbnail: Image.vong_tayT, image: Image.vong_tay, name: "Vòng Tay", price: 240, rate: 4, votes: 32 },
    { id: 40, imageThumbnail: Image.vong_tay1T, image: Image.vong_tay1, name: "vòng Tay", price: 150, rate: 4, votes: 35 },
    { id: 41, imageThumbnail: Image.vong_tay2T, image: Image.vong_tay2, name: "vòng Tay", price: 440, rate: 4, votes: 23 },
    { id: 42, imageThumbnail: Image.mu_bao_hiemT, image: Image.mu_bao_hiem, name: "Mũ Bảo Hiểm", price: 220, rate: 2, votes: 23 },
    { id: 43, imageThumbnail: Image.mu_bao_hiem1T, image: Image.mu_bao_hiem1, name: "Mũ Bảo Hiểm", price: 333, rate: 1, votes: 43 },
    { id: 44, imageThumbnail: Image.mu_luoi_chaiT, image: Image.mu_luoi_chai, name: "Mũ Bảo Hiểm", price: 444, rate: 5, votes: 54 },
    { id: 45, imageThumbnail: Image.dong_ho1T, image: Image.dong_ho1, name: "Đồng Hồ", price: 240, rate: 4, votes: 65 },
    { id: 46, imageThumbnail: Image.dong_ho2T, image: Image.dong_ho2, name: "Đồng Hồ", price: 350, rate: 5, votes: 45 },
    { id: 47, imageThumbnail: Image.dong_ho3T, image: Image.dong_ho3, name: "Đồng Hồ", price: 360, rate: 2, votes: 87 },
    { id: 48, imageThumbnail: Image.dong_ho4T, image: Image.dong_ho4, name: "Đồng Hồ", price: 140, rate: 3, votes: 17 },
    { id: 49, imageThumbnail: Image.dong_ho5T, image: Image.dong_ho5, name: "Đồng Hồ", price: 240, rate: 4, votes: 24 }]
];

const Products = (state = dataProducts, action) => {
    switch (action.type) {
        case "ALL_PRODUCT": return dataProducts[0].concat(dataProducts[1], dataProducts[2], dataProducts[3]);
        case "PRODUCT_AO": return dataProducts[0];
        case "PRODUCT_QUAN": return dataProducts[1];
        case "PRODUCT_GIAY": return dataProducts[2];
        case "PRODUCT_PHU_KIEN": return dataProducts[3];
        // sort
        case "SORT_DEFAULT":
            {
                let { TypeMess } = action;
                let newData = [];
                switch (TypeMess) {
                    case "ÁO": newData = [...dataProducts[0]]; break;
                    case "QUẦN": newData = [...dataProducts[1]]; break;
                    case "GIÀY": newData = [...dataProducts[2]]; break;
                    case "PHỤ KIỆN": newData = [...dataProducts[3]]; break;
                    default: newData = [...dataProducts[0], ...dataProducts[1], ...dataProducts[2], ...dataProducts[3]]; break;
                }
                return [...newData];
            }
        case "SORT_BY_RATE":
            {
                state.sort((a, b) => b.rate - a.rate);
                return [...state];
            }
        case "SORT_BY_HOT_PRODUCT":
            {
                state.sort((a, b) => b.votes - a.votes);
                return [...state];
            }
        case "SORT_BY_PRICE":
            {
                if (action.numb === 1) {
                    state.sort((a, b) => b.price - a.price);
                } else {
                    state.sort((a, b) => a.price - b.price);
                }
                return [...state];
            }

        case "OPTION_LEFT":   // option left
            {
                console.log(action)
                let { search, star, priceFrom, priceTo, TypeMess } = action;
                let newData = [];
                switch (TypeMess) {
                    case "ÁO": newData = [...dataProducts[0]]; break;
                    case "QUẦN": newData = [...dataProducts[1]]; break;
                    case "GIÀY": newData = [...dataProducts[2]]; break;
                    case "PHỤ KIỆN": newData = [...dataProducts[3]]; break;
                    default: newData = [...dataProducts[0], ...dataProducts[1], ...dataProducts[2], ...dataProducts[3]]; break;
                }

                let html = document.getElementById("--hashtag").getElementsByTagName("span");
                html[0].innerHTML = `#${search ? "[ " + search + " ] Trong " : ""}${TypeMess.toLowerCase()}`;
                html[1].innerHTML = `#${star} <i class="fas fa-star"></i> trở lên`;
                html[2].innerHTML = ` #${priceFrom}-${priceTo} $`;

                return newData.filter(function (item) {
                    if (search !== "") {
                        return item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 && item.rate >= star && item.price >= priceFrom && item.price <= priceTo;
                    } else {
                        return item.rate >= star && item.price >= priceFrom && item.price <= priceTo;
                    }
                });
            }


        default: return [...dataProducts[0], ...dataProducts[1], ...dataProducts[2], ...dataProducts[3]];
    }
}


export default Products;