### Multiplication Table File Generator

This is a simple Multiplication Table File Generator developed in Node.js.

#### Installation

To use this application, follow these steps:

Clone the repository or download it as a ZIP file.

Make sure you have Node.js installed on your system.

Open the terminal or command prompt and navigate to the project directory.

Run the following command to install the necessary dependencies:

npm install

##### Usage

Once you have installed the dependencies, you can use the application to generate multiplication table files.

To generate a multiplication table file for a specific number, use the following command:

`node index.js -b [base] -m`
Replace [base] with the base number for which you want to generate the multiplication table.

For example, if you want to generate a multiplication table file for the number 5, execute:

`node index.js -b 5 -m`
This will generate a tabla-5.txt file in the output directory with the multiplication table for the number 5.

If you want to limit the multiplication table to a specific number, you can add the -l option followed by the limit number. For example:

`node index.js -b 5 -m -l 22`
This will generate a tabla-5.txt file with the multiplication table for the number 5 up to the limit of 22.

##### Generated Files

The generated multiplication table files will be saved in the output directory with the following file name format:

`tabla-[base].txt`
Where [base] represents the base number for which the multiplication table was generated.
