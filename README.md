# RTK

## createSlice 
Redux'ta state management yapmayı istediğimiz her bir özellik için bize bir slice (bölüm) oluşturur.
slice'ı tanımlamak için bir 'name', 'initial state' ve state'in nasıl update olacağını belirtmek için reducer/lar'a ihtiyacımız vardır.  

## configureStore
Store'ı konfigüre etmemizi sağlar ve reducer slice tanımlanır.

## cresteAsyncThunk
Asenkron operasyonları yönetmemizi sağlar. Bu fonksiyon, bir asenkron işlemi gerçekleştiren bir action creator oluşturmanıza olanak tanır ve genellikle API çağrıları, veritabanı etkileşimleri gibi asenkron operasyonları işlemek için kullanılır.

## Reducer slice
createSlice'da oluşturulan reducer store'da reducer slice'ında depolanır ve state'deki güncellemleri tutar.

## Provider
App'imizi Provider ile sarmalarız ve store'u props olarak göndeririz böylece her yerden redux'da tutulan değerlere ulaşabiliriz. 

## useSelector
Store'daki datayı, önyüzde, useSelector aracılığıyla okuyabiliriz.

## useDispatch
Önyüzde tetiklenen action'ları useDispatch ile gönderebiliriz.
