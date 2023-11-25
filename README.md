# RTK

## createSlice:

Redux Toolkit'in createSlice fonksiyonu, bir Redux slice'ını (bölümünü) tanımlamak için kullanılır. Bir slice, Redux store'unun bir parçasıdır ve belirli bir özelliği yöneten bir reducer, başlangıç durumu (initial state) ve action'ları içerir.

## configureStore:

Redux Toolkit'in configureStore fonksiyonu, Redux store'unu yapılandırmak için kullanılır. Bu fonksiyon, reducer'ları, middleware'leri ve diğer store ayarlarını bir araya getirir.

## createAsyncThunk:

Bu fonksiyon, asenkron operasyonları yönetmek için kullanılır. Redux Toolkit'in bir parçası olarak gelir ve genellikle API çağrıları gibi asenkron işlemleri yönetmek için kullanılır.

## Reducer slice:

createSlice ile oluşturulan reducer, bir slice'ın içinde bulunur. Bu reducer, slice'ın başlangıç durumunu ve action'lara nasıl yanıt verileceğini belirler.

## Provider:

Provider, React uygulamasında Redux store'uyla bağlantı kurmamıza yardımcı olan bir bileşendir. Bu sayede Redux store'daki verilere erişebiliriz.

## useSelector:

useSelector, React uygulamasındaki bir bileşen içindeki Redux store'dan veri okumak için kullanılır. Bu hook sayesinde store'daki güncel verilere erişebiliriz.

## useDispatch:

useDispatch, Redux store'da tanımlanan action'ları tetiklemek için kullanılır. Bu hook sayesinde action'ları önyüzden çağırabiliriz.
