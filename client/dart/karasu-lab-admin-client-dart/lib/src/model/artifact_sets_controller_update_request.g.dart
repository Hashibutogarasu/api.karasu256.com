// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'artifact_sets_controller_update_request.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$ArtifactSetsControllerUpdateRequest
    extends ArtifactSetsControllerUpdateRequest {
  @override
  final String id;
  @override
  final String url;
  @override
  final String alt;
  @override
  final String key;
  @override
  final String character;

  factory _$ArtifactSetsControllerUpdateRequest(
          [void Function(ArtifactSetsControllerUpdateRequestBuilder)?
              updates]) =>
      (new ArtifactSetsControllerUpdateRequestBuilder()..update(updates))
          ._build();

  _$ArtifactSetsControllerUpdateRequest._(
      {required this.id,
      required this.url,
      required this.alt,
      required this.key,
      required this.character})
      : super._() {
    BuiltValueNullFieldError.checkNotNull(
        id, r'ArtifactSetsControllerUpdateRequest', 'id');
    BuiltValueNullFieldError.checkNotNull(
        url, r'ArtifactSetsControllerUpdateRequest', 'url');
    BuiltValueNullFieldError.checkNotNull(
        alt, r'ArtifactSetsControllerUpdateRequest', 'alt');
    BuiltValueNullFieldError.checkNotNull(
        key, r'ArtifactSetsControllerUpdateRequest', 'key');
    BuiltValueNullFieldError.checkNotNull(
        character, r'ArtifactSetsControllerUpdateRequest', 'character');
  }

  @override
  ArtifactSetsControllerUpdateRequest rebuild(
          void Function(ArtifactSetsControllerUpdateRequestBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  ArtifactSetsControllerUpdateRequestBuilder toBuilder() =>
      new ArtifactSetsControllerUpdateRequestBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is ArtifactSetsControllerUpdateRequest &&
        id == other.id &&
        url == other.url &&
        alt == other.alt &&
        key == other.key &&
        character == other.character;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, id.hashCode);
    _$hash = $jc(_$hash, url.hashCode);
    _$hash = $jc(_$hash, alt.hashCode);
    _$hash = $jc(_$hash, key.hashCode);
    _$hash = $jc(_$hash, character.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'ArtifactSetsControllerUpdateRequest')
          ..add('id', id)
          ..add('url', url)
          ..add('alt', alt)
          ..add('key', key)
          ..add('character', character))
        .toString();
  }
}

class ArtifactSetsControllerUpdateRequestBuilder
    implements
        Builder<ArtifactSetsControllerUpdateRequest,
            ArtifactSetsControllerUpdateRequestBuilder> {
  _$ArtifactSetsControllerUpdateRequest? _$v;

  String? _id;
  String? get id => _$this._id;
  set id(String? id) => _$this._id = id;

  String? _url;
  String? get url => _$this._url;
  set url(String? url) => _$this._url = url;

  String? _alt;
  String? get alt => _$this._alt;
  set alt(String? alt) => _$this._alt = alt;

  String? _key;
  String? get key => _$this._key;
  set key(String? key) => _$this._key = key;

  String? _character;
  String? get character => _$this._character;
  set character(String? character) => _$this._character = character;

  ArtifactSetsControllerUpdateRequestBuilder() {
    ArtifactSetsControllerUpdateRequest._defaults(this);
  }

  ArtifactSetsControllerUpdateRequestBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _id = $v.id;
      _url = $v.url;
      _alt = $v.alt;
      _key = $v.key;
      _character = $v.character;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(ArtifactSetsControllerUpdateRequest other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$ArtifactSetsControllerUpdateRequest;
  }

  @override
  void update(
      void Function(ArtifactSetsControllerUpdateRequestBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  ArtifactSetsControllerUpdateRequest build() => _build();

  _$ArtifactSetsControllerUpdateRequest _build() {
    final _$result = _$v ??
        new _$ArtifactSetsControllerUpdateRequest._(
            id: BuiltValueNullFieldError.checkNotNull(
                id, r'ArtifactSetsControllerUpdateRequest', 'id'),
            url: BuiltValueNullFieldError.checkNotNull(
                url, r'ArtifactSetsControllerUpdateRequest', 'url'),
            alt: BuiltValueNullFieldError.checkNotNull(
                alt, r'ArtifactSetsControllerUpdateRequest', 'alt'),
            key: BuiltValueNullFieldError.checkNotNull(
                key, r'ArtifactSetsControllerUpdateRequest', 'key'),
            character: BuiltValueNullFieldError.checkNotNull(character,
                r'ArtifactSetsControllerUpdateRequest', 'character'));
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
