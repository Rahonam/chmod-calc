# CHMOD command

In Unix operating systems, the chmod command is used to change the access mode of a file or folder.

### `chmod <options(-R/-v/-c/-f/-h)> <user_type(u/g/o/a)><add/revoke(+/-)><permission_type(r/w/x)> <file_or_directory name>`
- `-R`: Recursive mode. Changes permissions for directories and all files and subdirectories within them.
- `-v`: Verbose mode. Outputs a message for each file whose permissions are changed.
- `-c`: Changes mode only for files whose permissions actually change.
- `-f`: Forces changes without displaying error messages.
- `-h`: Modifies the symbolic link itself rather than the file it points to.
- `<user_type>`: Specifies the target user type for permission alteration (u for user, g for group, o for others, a for all).
- `<add/revoke>`: Indicates whether to add (+) or remove (-) the specified permissions for the user type.
- `<permission_type>`: Denotes the type of permission being modified (r for read, w for write, x for execute), can also be represented by a three-digit octal number.
- `<file_or_directory name>`: The name of the file or directory for which permissions are being adjusted.


## CHMOD permission simulator

Clone the project, run:

- `npm i`
- `npm start`
