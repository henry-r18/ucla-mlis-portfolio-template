<template>
  <!-- This view is for your course list, presented as a table.
  Assumes a two year, six quarter program,
  but you can modify the table as needed.-->
  <main id="main">
    <section class="section">
      <h1 class="title">Course List</h1>
      <h2 class="subtitle">The courses you took for each quarter of the MLIS program</h2>
      <table class="table">
        <thead>
          <tr>
            <th></th>
            <th>2020–2021</th>
            <th>2021–2022</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Fall</th>
            <td>
              IS 211 Artifacts and Cultures<br />IS 260 Description and Access
            </td>
            <td>
              Other courses
            </td>
          </tr>
          <tr>
            <th>Winter</th>
            <td>
              IS 270 Systems and Infrastructure
            </td>
            <td>
              Other courses
            </td>
          </tr>
          <tr>
            <th>Spring</th>
            <td>
              IS 212 Values and Communities
            </td>
            <td>
              Other courses
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
section table {
  width: 50vw;
  text-align: left;
  margin: auto;
}

section table th {
  vertical-align: middle;
}
</style>