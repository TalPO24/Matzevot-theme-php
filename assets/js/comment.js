const generatedComments = [
  {
    name: " דור כהן",
    comment:
      "רצינו להביע את הערכה העמוקה לשירות מדהים ומושקע שקיבלנו בעת יצירת המצבה. הקשבה לכל דרישה, חשיבה יצירתית וגישה אישית הפכו את התהליך לנפלא והתוצאה היא מרשימה. תודה",
  },
  {
    name: " דניאל לוי",
    comment:
      "תודה רבה על המקצועיות, האמינות וההקפדה למיליון הפרטים הקטנים שהפכו את המצבה שלנו לאחת מסוגה",
  },
  {
    name: "ברוך גולדברג",
    comment:
      "השירות שקיבלנו במהלך הייצור היה מעבר לכל הציפיות. הגיבוי המקצועי, הכוונה בעיצוב והגישה הטובה יצרו לנו את המצבה המושלמת לזכר יקירנו. תודה",
  },
  {
    name: "גליה רוזנבלום",
    comment:
      "אנחנו מאוד מרוצים מהמצבה שהזמנו מכם. תודה על השירות הטוב והמקצועי",
  },
  {
    name: "עומר פרץ",
    comment:
      "המצבה שיצרתם עבורנו הפתיעה אותנו בצורה הטובה ביותר. אנחנו מודים לכם מאוד על העבודה הנהדרת",
  },
];

// Function to generate comments
function generateComments() {
  const commentsList = document.querySelector(".comments__list");

  generatedComments.forEach((comment) => {
    const commentItem = document.createElement("div");
    commentItem.classList.add("comments__item");

    const commentContent = `
            
            <div class="comments__text">
                <h4 class="comments__name">${comment.name}</h4>
                <p class="comments__comment">${comment.comment}</p>
            </div>
            <div class="comments__avatar">
                <i class="ri-user-line"></i>
            </div>
        `;

    commentItem.innerHTML = commentContent;
    commentsList.appendChild(commentItem);
  });
}

// Call the function to generate comments when the page loads
window.addEventListener("DOMContentLoaded", generateComments);
