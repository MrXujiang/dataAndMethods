/**
 * 求一个集合是否是另一个集合的子集
 */
function isSubCollection(arr1, arr2){
	arr2.every((item)=>{return arr1.includes(item)})
}
