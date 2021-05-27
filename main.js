import protochain from 'goss_proto'
var a=protochain.o3
var array = []
while (Object.getPrototypeOf(a) != null) {
    const proto = Object.getPrototypeOf(a) //берем прототип у a
    console.log(proto.name)
    a = proto
    array.push(proto.name)
}
// В цепочке 3 ненулевых прототипа
console.log(array)
export {array}
