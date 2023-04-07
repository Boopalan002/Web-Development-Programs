<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html>
  <body>
  <h2>Students Personal Details</h2>
  <table border="1">
    <tr bgcolor="#9acd32">
      <th>Name</th>
      <th>Age</th>
      <th>DOB</th>
      <th>Mobile</th>
      <th>Address</th>
    </tr>
    <xsl:for-each select="students/student">
    <tr>
      <td><xsl:value-of select="name"/></td>
      <td><xsl:value-of select="age"/></td>
      <td><xsl:value-of select="dob"/></td>
      <td><xsl:value-of select="mobile"/></td>
      <td><xsl:value-of select="address"/></td>
    </tr>
    </xsl:for-each>
  </table>
  </body>
  </html>
</xsl:template>

</xsl:stylesheet>