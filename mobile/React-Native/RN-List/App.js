//This is an example code for FlatList//
import React from 'react';
//import react in our code.
import { StyleSheet, FlatList, Text, View, Alert, Image } from 'react-native';
//import all the components we are going to use.

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [
        { 
          id: 'https://photo2.tinhte.vn/data/attachment-files/2019/08/4759509_cover_home_nu_hoc_code.jpg', 
          value: 'Mời các bạn nữ đăng kí học bổng học làm web full stack trị giá 95 triệu VND',
          type: 'Hiện tại mình được chia sẻ thông tin rằng Coderschool (một trường dạy tech) đang có 2 gói học bổng dành cho 2 bạn nữ...' ,
          man: 'Duy Luân - 4 giờ trước'
        },
        { 
          id: 'https://photo2.tinhte.vn/data/attachment-files/2019/08/4759302_cover_Samsung_DeX_PC_tinhte_.jpg', 
          value: 'Samsung DeX trên PC hoạt động như thế nào và có thể làm được gì?',
          type: 'Samsung DeX là tính năng giúp mở rộng giao diện điện thoại để sử dụng trên màn hình lớn với các ứng dụng dạng cửa sổ. Ở thế hệ Note10',
          man: 'Trung DT - 4 giờ trước' 
        },
        { 
          id: 'https://photo2.tinhte.vn/data/attachment-files/2019/08/4759508_cover_Note10_iPhoneXs.jpg', 
          value: 'Lý do rất khó khăn khi chuyển từ iPhone sang điện thoại Android làm máy chính',
          type: 'Năm nay mình thực sự rất ấn tượng khi Samsung ra mắt bộ đôi Note 10/Note 10+, đặc biệt là Note 10. Sau mấy năm dùng iOS mình đã cảm thấy nhàm chán' ,
          man: 'tintin.com - 5 giờ trước'
        },
        { 
          id: 'https://photo2.tinhte.vn/data/attachment-files/2019/08/4759492_cover_home_mate_30_pro.jpg', 
          value: 'Thêm hình ảnh về Huawei Mate 30 Pro với cụm camera tròn, anh em thấy đẹp không?',
          type: 'Đây là một tấm ảnh rò rỉ khác về chiếc Huawei Mate 30 Pro, củng cố cho tin đồn ít hôm trước rằng mẫu điện'  ,
          man: 'Duy Luân - 5 giờ trước'
        },
        { 
          id: 'https://photo2.tinhte.vn/data/attachment-files/2019/08/4759523_cover_home_google_photos_nen_dung.jpg', 
          value: 'TOP 5 lý do bạn nên dùng Google Photos làm nơi lưu ảnh chính',
          type: 'Mình muốn rủ anh em dùng Google Photos làm phương tiện sao lưu, chia sẻ ảnh chính nếu anh em chưa dùng tới nó'  ,
          man: 'Duy Luân - 6 giờ trước'
        },
        { 
          id: 'https://photo2.tinhte.vn/data/attachment-files/2019/08/4756655_Cover_dieu_hoa_xe_hoi_Xe_Tinhte.jpg', 
          value: 'Lấy gió ngoài và lấy gió trong cho điều hoà xe hơi khác nhau thế nào?',
          type: 'Không phải ngẫu nhiên mà điều hoà xe hơi có 2 chế độ lấy gió trong và lấy gió ngoài. Vậy hai chế độ'  ,
          man: 'Tuannph - 5 giờ trước'
        },
        { 
          id: 'https://photo2.tinhte.vn/data/attachment-files/2019/08/4759470_cover_home_my_feed_open_beta.jpg', 
          value: 'My Feed beta đã mở cho tất cả anh em Tinh tế, mời anh em trải nghiệm feed cá nhân hóa cho riêng mình',
          type: 'Sau một thời gian thử nghiệm cho anh em Cao cấp và VIP, tính năng My Feed bản web hiện đã mở ra cho tất cả mọi người sử dụng'  ,
          man: 'Duy Luân - 6 giờ trước'
        },
        { 
          id: 'https://photo2.tinhte.vn/data/attachment-files/2019/08/4759433_cover.jpg', 
          value: 'Samsung A90 5G và A91 lộ diện thông qua danh sách thiết bị hỗ trợ sạc nhanh 45W',
          type: 'Trang web Samsung Hungary đã vô tình cho người dùng biết hai chiếc máy sắp ra mắt mang mã hiệu A90 5G và A91'  ,
          man: 'Trung DT - 6 giờ trước'
        },        
      ],
    };
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <FlatList
          data={this.state.FlatListItems}
          //data defined in constructor
          //Item Separator View
          renderItem={({ item }) => (
            // Single Comes here which will be repeatative for the FlatListItems
            <View style={styles.ListContainer}>
              <View style={styles.headerContainer}>
                <Text style={styles.header}>
                  {item.value}
                </Text>
              </View>
              <View style={styles.itemContainer}>
                <View style={styles.imageContainer}>
                  <Image style={styles.avatar} source={{uri: item.id}}></Image>
                </View>
                <View style={styles.textContainer}>
                  <View style={styles.insideTextContainer}>
                  	<Text style={styles.insideText}>{item.type}</Text>
                  </View>
                  <View style={styles.insideTextContainer1}>
                  	<Text style={styles.insideText1}>{item.man}</Text>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 30,
  },

  ListContainer: {
    width: '100%',
    height: 200,
    justifyContent: 'flex-start', //  direction follow vertical axis
    alignItems: 'center',    // direction follow cross axis
    flexDirection: 'column',
  },

  headerContainer: {
    width: '100%',
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },

  itemContainer: {
    flex: 4,
    width: '100%',
    flexDirection: 'row'
  },

  textContainer: {
    flex: 1,
  },

  insideTextContainer: {
    flex: 5,
  },

  insideTextContainer1: {
    flex: 3,
    justifyContent: 'center'
  },

  imageContainer: {
    flex: 1,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center'
  },


  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  avatar: {
    width: '100%',
    height: '100%',
    borderWidth: 0.5,
    borderColor: 'gray',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },

  insideText: {
  	padding: 5,
  	fontSize: 12,
  },


  insideText1: {
  	padding: 5,
  	fontSize: 14,
  	color: 'green',
  },
});
