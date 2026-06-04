function SQLite() {
  return (
    <main>
      <h1>SQLite</h1>
      <p>
        Now it's time to look at using a database in anger. There are a number
        of different SQL variants each usually associated to a specific engine.
        This engine runs the SQL (both DDL and DML) to ensure your database is
        up and running. For this we will use SQLite ..
      </p>
      <p>
        To make life easier we will also make use of a DBMS. Where SQLite can
        run our raw queries, the DBMS provides a easier to use interface. We can
        use this to perform basic operations usually called CRUD (Create, Read,
        Update, Delete). For this we will use ...
      </p>
      <p>
        For you to run a database you need an engine up and running. You can do
        without the DBMS. However the DBMS provides a handy way to monitor the
        current state of the database. This means people can fully manage a
        database using just the DBMS. Obviously we won't be doing this as we
        LOVE SQL!
      </p>
    </main>
  );
}
export default SQLite;
