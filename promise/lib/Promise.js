(function (window) {
	
	const PENDING = "pending"
	const RESOLVED = "resolved"
	const REJECTED = "rejected"
	
	/*
	Promise构造函数
	excutor: 执行器函数(同步执行)
	*/
	function Promise(excutor) {
		const self = this
		self.status = PENDING
		self.data = undefined
		self.callbacks = []
		
		
		function resolve(value) {
			if(self.status !== PENDING) {
				return
			}
			
			self.status = RESOLVED
			self.data = value
			if(self.callbacks.length > 0) {
				// 必须将所有成功的回调放入队列中执行
				setTimeout(() => {
					self.callbacks.forEach(callbacksObj => {
						callbacksObj.onResolved(value)
					})
				}, 0)
			}
			
		}
		
		function reject(reason) {
			if(self.status !== PENDING) {
				return
			}
			
			self.status = REJECTED
			self.data = reason
			if(self.callbacks.length > 0) {
				// 必须将所有成功的回调放入队列中执行
				setTimeout(() => {
					self.callbacks.forEach(callbacksObj => {
						callbacksObj.onRejected(reason)
					})
				}, 0)
			} 
		}
		
		// 立即同步执行excutor
		try{
			excutor(resolve, reject)
		}catch(error){
			//TODO handle the exception
			reject(error)
		}
	}
	
	Promise.prototype.then() = function(onResolved, onRejected) {
		
	}
	
	Promise.prototype.catch() = function(onRejected) {
		
	}
	
	Promise.resolve = function(value) {
		
	}
	
	Promise.reject = function(reason) {
		
	}
	
	Promise.all = function(promises) {
		
	}
	
	Promise.race = function(promises) {
		
	}
	
	
	
	window.Promise = Promise
})(window)