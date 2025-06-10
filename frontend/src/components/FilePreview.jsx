// import React from "react";
// import { Avatar, Box, Typography } from "@mui/material";

// const FilePreview = ({ previews }) => {
//   if (!previews || previews.length === 0) return null;

//   return (
//     <Box sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 2 }}>
//       {previews.map((url, index) => {
//         const isPdf = url.includes("application/pdf") || url.endsWith(".pdf");

//         return isPdf ? (
//           <a
//             key={index}
//             href={url}
//             target="_blank"
//             rel="noopener noreferrer"
//             style={{ textDecoration: "none" }}
//           >
//             <Typography variant="body2" color="primary">
//               📄 View PDF {index + 1}
//             </Typography>
//           </a>
//         ) : (
//           <Avatar
//             key={index}
//             src={url}
//             variant="rounded"
//             sx={{ width: 56, height: 56 }}
//           />
//         );
//       })}
//     </Box>
//   );
// };

// export default FilePreview;

// import { Grid } from "@mui/material";

// const FilePreview = ({ previews }) => (
//   <Grid container spacing={1} sx={{ mt: 1 }}>
//     {previews.map((url, i) => (
//       <Grid item key={i}>
//         {url.includes("pdf") ? (
//           <a href={url} target="_blank" rel="noopener noreferrer">
//             View PDF
//           </a>
//         ) : (
//           <img
//             src={url}
//             alt={`attachment-${i}`}
//             width={64}
//             height={64}
//             style={{ objectFit: "cover", borderRadius: 4 }}
//           />
//         )}
//       </Grid>
//     ))}
//   </Grid>
// );

// export default FilePreview;

import { Box } from "@mui/material";

const FilePreview = ({ previews }) => (
  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
    {previews.map((url, i) => (
      <Box
        key={i}
        sx={{
          width: 96,
          height: 96,
          borderRadius: 1,
          overflow: "hidden",
          border: "1px solid white",
        }}
      >
        {url.includes("pdf") ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#93C5FD", fontSize: 12 }}
          >
            View PDF
          </a>
        ) : (
          <img
            src={url}
            alt={`attachment-${i}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        )}
      </Box>
    ))}
  </Box>
);

export default FilePreview;