let urls = "https://localhost:5000";
	// #ifdef H5
	urls = "/ai";
	// #endif
 export default (options)=>{
	uni.showLoading({
		title:"加载中..."
	})
	return new Promise((resolve,reject)=>{
		uni.request({
			url:urls+options.url,
			method:options.method||"GET",
			data:options.data||{},
			success(res){
				if(res){
					resolve(res)
				}
			},
			fail(err){
				reject(err)
			},
			complete(){
				uni.hideLoading()
			}
		})
	})
}