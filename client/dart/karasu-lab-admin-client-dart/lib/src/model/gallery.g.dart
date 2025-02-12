// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'gallery.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$Gallery extends Gallery {
  @override
  final String id;
  @override
  final String? alt;
  @override
  final String? url;
  @override
  final String? key;
  @override
  final DateTime createdAt;
  @override
  final DateTime updatedAt;
  @override
  final GICharacter? character;

  factory _$Gallery([void Function(GalleryBuilder)? updates]) =>
      (new GalleryBuilder()..update(updates))._build();

  _$Gallery._(
      {required this.id,
      this.alt,
      this.url,
      this.key,
      required this.createdAt,
      required this.updatedAt,
      this.character})
      : super._() {
    BuiltValueNullFieldError.checkNotNull(id, r'Gallery', 'id');
    BuiltValueNullFieldError.checkNotNull(createdAt, r'Gallery', 'createdAt');
    BuiltValueNullFieldError.checkNotNull(updatedAt, r'Gallery', 'updatedAt');
  }

  @override
  Gallery rebuild(void Function(GalleryBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  GalleryBuilder toBuilder() => new GalleryBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is Gallery &&
        id == other.id &&
        alt == other.alt &&
        url == other.url &&
        key == other.key &&
        createdAt == other.createdAt &&
        updatedAt == other.updatedAt &&
        character == other.character;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, id.hashCode);
    _$hash = $jc(_$hash, alt.hashCode);
    _$hash = $jc(_$hash, url.hashCode);
    _$hash = $jc(_$hash, key.hashCode);
    _$hash = $jc(_$hash, createdAt.hashCode);
    _$hash = $jc(_$hash, updatedAt.hashCode);
    _$hash = $jc(_$hash, character.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'Gallery')
          ..add('id', id)
          ..add('alt', alt)
          ..add('url', url)
          ..add('key', key)
          ..add('createdAt', createdAt)
          ..add('updatedAt', updatedAt)
          ..add('character', character))
        .toString();
  }
}

class GalleryBuilder implements Builder<Gallery, GalleryBuilder> {
  _$Gallery? _$v;

  String? _id;
  String? get id => _$this._id;
  set id(String? id) => _$this._id = id;

  String? _alt;
  String? get alt => _$this._alt;
  set alt(String? alt) => _$this._alt = alt;

  String? _url;
  String? get url => _$this._url;
  set url(String? url) => _$this._url = url;

  String? _key;
  String? get key => _$this._key;
  set key(String? key) => _$this._key = key;

  DateTime? _createdAt;
  DateTime? get createdAt => _$this._createdAt;
  set createdAt(DateTime? createdAt) => _$this._createdAt = createdAt;

  DateTime? _updatedAt;
  DateTime? get updatedAt => _$this._updatedAt;
  set updatedAt(DateTime? updatedAt) => _$this._updatedAt = updatedAt;

  GICharacterBuilder? _character;
  GICharacterBuilder get character =>
      _$this._character ??= new GICharacterBuilder();
  set character(GICharacterBuilder? character) => _$this._character = character;

  GalleryBuilder() {
    Gallery._defaults(this);
  }

  GalleryBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _id = $v.id;
      _alt = $v.alt;
      _url = $v.url;
      _key = $v.key;
      _createdAt = $v.createdAt;
      _updatedAt = $v.updatedAt;
      _character = $v.character?.toBuilder();
      _$v = null;
    }
    return this;
  }

  @override
  void replace(Gallery other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$Gallery;
  }

  @override
  void update(void Function(GalleryBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  Gallery build() => _build();

  _$Gallery _build() {
    _$Gallery _$result;
    try {
      _$result = _$v ??
          new _$Gallery._(
              id: BuiltValueNullFieldError.checkNotNull(id, r'Gallery', 'id'),
              alt: alt,
              url: url,
              key: key,
              createdAt: BuiltValueNullFieldError.checkNotNull(
                  createdAt, r'Gallery', 'createdAt'),
              updatedAt: BuiltValueNullFieldError.checkNotNull(
                  updatedAt, r'Gallery', 'updatedAt'),
              character: _character?.build());
    } catch (_) {
      late String _$failedField;
      try {
        _$failedField = 'character';
        _character?.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            r'Gallery', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
