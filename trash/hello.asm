section .data
    hello db 'Hello, Sumon',0

section .text
    global _start

_start:
    ; write syscall
    mov eax, 4
    ; file descriptor (stdout)
    mov ebx, 1
    ; pointer to message to write
    mov ecx, hello
    ; length of message to write
    mov edx, 12
    int 0x80

    ; exit syscall
    mov eax, 1
    ; exit code
    xor ebx, ebx
    int 0x80
