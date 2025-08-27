# 📁 Project Structure
mkdir array_methods_project && cd array_methods_project

# Create all required files
touch README.md
touch 0-basic_list_of_objects.js
touch 1-more_mapping.js
touch 2-filter.js
touch 3-reduce.js
touch 4-combine.js
touch 5-typed_arrays.js
touch 6-set_data_structure.js
touch 7-more_set_data_structure.js
touch 8-clean_set.js
touch 9-map_data_structure.js
touch 10-more_map_data_structure.js

# 📝 Add README.md content
cat <<EOF > README.md
# Array Methods & Data Structures Project

## Learning Objectives
By the end of this project, you should be able to explain and apply the following concepts without external help:

- How to use **map**, **filter**, and **reduce** on arrays
- How to work with **Typed Arrays**
- How to use and differentiate between **Set**, **Map**, and **WeakMap** data structures

## Requirements
- All files interpreted/compiled on **Ubuntu 20.04 LTS** using **Node.js 20.x.x** and **npm 9.x.x**
- Allowed editors: **vi**, **vim**, **emacs**, **Visual Studio Code**
- All files must end with a **new line**
- A `README.md` file at the root of the project is **mandatory**
- All code files must use the `.js` extension
- Code will be tested using **Jest** with the command: `npm run test`
- Code will be verified against lint using **ESLint**
- To verify the entire project: `npm run full-test`
- All functions must be **exported**

EOF
