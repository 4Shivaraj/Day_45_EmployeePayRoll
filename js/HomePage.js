window.addEventListener("DOMContentLoaded", (event) => {
  createInnerHtml();
});

//template using literal ES6 feature
const createInnerHtml = () => {
  const headerHtml = `<tr>
      <th></th>
      <th>Name</th>
      <th>Gender</th>
      <th>Department</th>
      <th>Salary</th>
      <th>StartDate</th>
      <th>Actions</th>
</tr>`;
  const innerHtml = `${headerHtml}
      <tr>
        <td><img class="profile" alt="" src="../assets/profile-images/Ellipse -3.png"></td>
        <td>Shivaraj</td>
        <td>Male</td>
        <td>
          <div class="dept-label">HR</div>
          <div class="dept-label">Engineer</div>
        </td>
        <td>350000</td>
        <td>17 Aug 2022</td>
        <td>
          <img id="1" src="../Assets/icons/delete-black-18dp.svg" alt="delete">
          <img id="1" src="../Assets/icons/delete-black-18dp.svg" alt="delete">
        </td>
      </tr>
  `;
  document.querySelector("#display").innerHTML = innerHtml;
};
