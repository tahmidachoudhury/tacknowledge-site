"use client"

export function Maps() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "400px", // Fixed height that works well on most screens
        maxHeight: "50vh", // Ensures it doesn't take up too much vertical space
      }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1241.7245652189074!2d-0.4273992!3d51.5049757!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876731f725afb59%3A0x820ea5df77a04064!2sHatch%20Academy!5e0!3m2!1sen!2suk!4v1741428891901!5m2!1sen!2suk"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}
