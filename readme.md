*NOTES: Deploy masih mengalami crash*

---- USER ----
<br> SignUp :POST | localhost:3000/signup | bagian body diisi API Register
<br> SignIn :POST | localhost:3000/signin | bagian body diisi API Login
<br> LogOut :GET | localhost:3000/logout
<br> Melihat Semua User : GET | localhost:3000/getAllUser
<br> Melihat User berdasarkan ID User : GET | localhost:3000/63778bb87133d49b9761556e (berasal dari id user)
<br> UpdateUserByID : PATCH | localhost:3000/6377128ae88f3ac2b833d79e (berasal dari id user) 
<br> DeleteUserByID : DELETE | localhost:3000/6377128ae88f3ac2b833d79e (berasal dari id user) 
 
---- ADMIN ----
<br> Upload Artikel : POST | localhost:3000/admin | bagian body diisi API Artikel
<br> Lihat Semua Artikel : GET | localhost:3000/admin
<br> Update Artikel : PUT | localhost:3000/admin/6379b87a0734529b7a7705a6 (berasal dari id artikel)
<br> Delete Artikel : DELETE | localhost:3000/admin/6379b87a0734529b7a7705a6 (berasal dari id artikel)
