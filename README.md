# Sticky

Sayfada belirli bir scroll'a gelindiğinde sayfaya yapışan elementler.

## Kullanımı

`sticky` fonksiyonu bir obje parametresi bekler.

Bu parametreler;

| attribute | tür | açıklama | varsayılan değer |
| :---: | :---: | :---: | :---: |
| `breakpoint` | `string` | hangi çözünürlükte sticky olacak | `mobile` `tablet` `desktop` |
| `id` | `string` | sticky olacak elementin id'si | - | 
| `scrollPosition` | `integer` | hangi scroll pozisyonunda sticky olacağı | - |
| `className` | `string` | sticky olacak elemente eklenen class | `sticky` |
| `hidden` | `boolean` | aşağı inerken element gizlensin mi değeri | `false` |


Örnek;

```js
sticky({
  breakpoint      : "mobile",
  id              : "header",
  scrollPosition  : 450,
  className       : "yapiskan",
  hidden          : true
})
```

Yukarıdaki kod, `header` id'sine sahip HTML elementine mobil çözünürlükte, 450px scroll'dan sonra `yapiskan` sınıfını ekler.
Aşağı yönde scroll yapıldığında header'a sınıf eklemek fakat yukarı scroll edildiğinde `yapiskan` sınıfını ekler.

---

* `breakpoint` değerine verilecek değerler mobile, tablet, desktop olarak verilmiştir ama kod tarafı ilk harfine bakar. Yani "m" yada "mahmut" yazılması yine mobil olarak çalışacaktır.

* `className` değerine bir değer girilmezse `sticky` sınıfı varsayılan olarak eklenir.

* `hidden` değerine bir değer girilmezse element belirlenen px'den sonra sınıf adı direkt eklenir; yukarı yada aşağı scroll edilmesini dinlemez.

---

**NOT**: Proje sadece JavaScript içerir. Scroll dinlenir ve belirlenen px'de belirlenen elemente class eklenir. Herhangi bir CSS içermez. CSS kısmını proje ihtiyacına göre sizin yazmanız gerekir.
