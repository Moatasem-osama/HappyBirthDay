const messageElement = document.getElementById("message");
const messages = [
    "كل عام وأنتِ نور حياتنا، يا أغلى من في الدنيا.",
    "أنتِ الأمان والحنان، وكل لحظة معك عيد. كل سنة وأنتِ بخير يا أمي.",
    "أنتِ سبب سعادتي ونجاحي، وأنتِ مصدر قوتي في الحياة. عيد أم سعيد يا أمي.",
    "كل عام وأنتِ تملئين حياتي حبًا وحنانًا، لا أستطيع وصف حبك يا أمي.",
    "يا أجمل قلب في الكون، أدامك الله لنا يا أمي الحبيبة.",
    "أمي، أنتِ جنة الدنيا بالنسبة لي، كل عيد أم وأنتِ في قلبي.",
    "بوجودك في حياتي، كل يوم هو عيد. كل عام وأنتِ بخير يا أمي.",
    "أنتِ منبع الحب والعطاء، لا يوجد كلمات تكفي لشكر قلبك الطيب. عيد أم سعيد!",
    "عيد أم سعيد لأروع أم في العالم، كل يوم وأنا أشكر الله على وجودك في حياتي."
  ];
  
let index = 0;
let changeCount = document.getElementById("changeCount");
let asomy = document.getElementById("asomy");

changeCount.addEventListener("click", () => {
  index = (index + 1) % messages.length;
  messageElement.textContent = messages[index];


});
